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
  use_env_variable: process.env.POSTGRES_URL,
};

module.exports = { development, production };
