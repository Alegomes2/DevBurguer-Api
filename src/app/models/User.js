import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: "users",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Order, {
      foreignKey: "user_id",
      as: "orders",
    });
  }
}

export default User;