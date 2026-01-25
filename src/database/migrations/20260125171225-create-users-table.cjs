
/**  @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('users', {
       id: {
        primaryKey: true, // primaryKey: identificador unico da linha (id)
        allowNull: false, // allowNull: nega a permissao do usuario ser criado sem um id
        type: Sequelize.UUID, // significa id unico, com letras e numeros
        defaultValue: Sequelize.UUIDV4 // id sera criado com um valor padrao
       },
       name: {
        type: Sequelize.STRING,
        allowNull: false
       },
       email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // unique --> propriedade que não permite criar usuario com email repetido
       },
       passoword_hash: {
        type: Sequelize.STRING,
        allowNull: false
       },
       admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false
       }
    });
  },

  async down (queryInterface,) {
     await queryInterface.dropTable('users');
    
  }
};

// UP --> subir, configurar
// DOWN --> descer, desfazer, derrubar
