import Sequelize, { Model } from "sequelize";

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.UUID,
        status: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "orders",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });

    this.hasMany(models.OrderItem, {
      foreignKey: "order_id",
      as: "items",
    });
  }
}

export default Order;