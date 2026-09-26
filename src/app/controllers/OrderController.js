import * as Yup from "yup";
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";
import User from "../models/User.js";

class OrderController {
  async store(request, response) {
    const schema = Yup.object({
      products: Yup.array()
        .required()
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          })
        ),
    });

    try {
      schema.validateSync(request.body, {
        abortEarly: false,
      });
    } catch (err) {
      return response.status(400).json({
        error: err.errors,
      });
    }

    const { products } = request.body;

    const user = await User.findByPk(request.userId);

    if (!user) {
      return response.status(404).json({
        error: "User not found",
      });
    }

    const productsIds = products.map((product) => product.id);

    const findProducts = await Product.findAll({
      where: {
        id: productsIds,
      },
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["name"],
        },
      ],
    });

    const order = await Order.create({
      user_id: user.id,
      status: "Pedido Realizado",
    });

    const orderItems = products.map((product) => ({
      order_id: order.id,
      product_id: product.id,
      quantity: product.quantity,
    }));

    await OrderItem.bulkCreate(orderItems);

    return response.status(201).json({
      id: order.id,
      user: {
        id: user.id,
        name: user.name,
      },
      products: findProducts.map((product) => {
        const productIndex = products.findIndex(
          (item) => item.id === product.id
        );

        return {
          id: product.id,
          name: product.name,
          category: product.category?.name,
          price: product.price,
          url: product.url,
          quantity: products[productIndex].quantity,
        };
      }),
      status: order.status,
    });
  }

  async index(request, response) {
    const orders = await Order.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "name", "email"],
        },
        {
          model: OrderItem,
          as: "items",
          include: [
            {
              model: Product,
              as: "product",
              attributes: ["id", "name", "price", "path"],
            },
          ],
        },
      ],
    });

    return response.json(orders);
  }

  async update(request, response) {
    const schema = Yup.object({
      status: Yup.string().required(),
    });

    try {
      schema.validateSync(request.body, {
        abortEarly: false,
      });
    } catch (err) {
      return response.status(400).json({
        error: err.errors,
      });
    }

    const user = await User.findByPk(request.userId);

    if (!user.admin) {
      return response.status(401).json();
    }

    const { id } = request.params;
    const { status } = request.body;

    try {
      await Order.update(
        {
          status,
        },
        {
          where: {
            id,
          },
        }
      );
    } catch (err) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.json({
      message: "Status updated successfully",
    });
  }
}

export default new OrderController();