import { Sequelize, Dialect } from 'sequelize';

const DB_NAME = process.env.DB_NAME as string;
const DB_USER = process.env.DB_USER as string;
const DB_PASS = process.env.DB_PASS;
const DB_CONFIG = {
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  port: 3306,
};

let db: any = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error('Error connectiong to database, check keys');
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log(`Connected database: ${DB_NAME}`);
  } catch (error) {
    console.error('Error connecting to database');
  }
}

Object.assign(db, {
  hasConnection,
});

export default db;
