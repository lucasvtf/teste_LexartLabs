'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'products',
        {
          id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          brand: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          model: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          color: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          price: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        },
        { transaction }
      );
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('products', { transaction });
  },
};
