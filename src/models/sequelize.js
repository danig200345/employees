import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    timezone: process.env.TIMEZONE,

  });
try {
  await sequelize.authenticate();
  console.log('✅ Conexión a la base de datos MySQL establecida exitosamente.');
} catch (error) {
  console.error('❌ ERROR: No se pudo conectar a la base de datos MySQL.');
  console.error('Detalles:', err.message);
};

