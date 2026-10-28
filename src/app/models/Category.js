import Sequelize, { Model } from 'sequelize'

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
  type: Sequelize.VIRTUAL,
  get() {
    const apiUrl = process.env.API_URL || 'http://localhost:3001'

    return `${apiUrl}/category-file/${this.path}`
  },
},
        
      },
      {
        sequelize,
        tableName: 'categories',
      }
    )
    return this
  }
}

export default Category