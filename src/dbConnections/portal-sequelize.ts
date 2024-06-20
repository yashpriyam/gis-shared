import { Sequelize } from 'sequelize-typescript';
import { User } from '../portal-models/user.model';  // Import all your models here

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'portal-db',
    models: [User],  // Add your models here
});

export default sequelize;
