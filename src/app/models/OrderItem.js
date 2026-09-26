import Sequelize, { Model } from "sequelize";

class OrderItem extends Model {
  static init(sequelize) {
    super.init(
      {
        order_id: Sequelize.INTEGER,
        product_id: Sequelize.INTEGER,
        quantity: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: "order_items",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Order, {
      foreignKey: "order_id",
      as: "order",
    });

    this.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "product",
    });
  }
}

export default OrderItem;