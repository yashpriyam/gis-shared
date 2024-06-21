import { Sequelize } from 'sequelize-typescript';
import { NoUser } from '../core-ml-models/user.model';  // Import all your models here

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST || 'core-ml-db',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'portal-db',
    models: [NoUser],  // Add your models here
});

export default sequelize;
