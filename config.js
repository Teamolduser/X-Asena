const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({ path: './config.env' });
}

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL || './assets/database.db';

module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || true,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || 'demote',
  SESSION_ID: process.env.SESSION_ID || 'Nm1pVEh_XASENA_xd3Y=',
  LANG: process.env.LANG || 'EN',
  HANDLERS: process.env.HANDLER === 'true' || process.env.HANDLER === '!' ? '^' : '^[!]',
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: 'master',
  PACKNAME: process.env.PACKNAME || 'X-asena',
  WELCOME_MSG: process.env.WELCOME_MSG || 'Hi @user Welcome to @gname',
  GOODBYE_MSG: process.env.GOODBYE_MSG || 'Hi @user It was Nice Seeing you',
  AUTHOR: process.env.AUTHOR || 'X-electra',
  SUDO: process.env.SUDO || '918602239106,918811074852',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'xasenabot',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '92a8cdb4-6b85-4b0c-a023-9429c8e579ca',
  OWNER_NAME: process.env.OWNER_NAME || 'OLDUSER',
  BOT_NAME: process.env.BOT_NAME || 'X-asena',
  WORK_TYPE: process.env.WORK_TYPE || 'public',
  DATABASE_URL: DATABASE_URL,
  DATABASE: DATABASE_URL === './assets/database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })  
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          native: true,
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      }),
};
