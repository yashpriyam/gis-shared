import { Sequelize } from 'sequelize-typescript';
import { User } from '../portal-models/user.model';  // Import all your models here

export const portalSequelize = new Sequelize({
    database: process.env.PORTAL_DB_NAME || 'portal',
    username: process.env.PORTAL_DB_USER || 'user',
    password: process.env.PORTAL_DB_PASSWORD || 'password',
    host: process.env.PORTAL_DB_HOST || 'portal-db',
    port: Number(process.env.PORTAL_DB_PORT) || 5432,
    dialect: 'postgres',
    models: [User],
  });


