require('dotenv').config();

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  define: {
    timestamp: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  seederStorage: 'sequelize',
  logging: false,
};

const production = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  define: {
    timestamp: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  seederStorage: 'sequelize',
  logging: false,
};

module.exports = { development };
