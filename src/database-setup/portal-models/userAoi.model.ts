import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model'; // Adjust the import path based on your project structure

@Table({
    tableName: 'user_aoi',
    timestamps: true
})
export class UserAOI extends Model{
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
    })
    userId!: number;

    @Column({
        type: DataType.JSON,
        allowNull: false
    })
    aoi!: object;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true
    })
    deleted?: boolean;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: false
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: false
    })
    updatedAt!: Date;

    @BelongsTo(() => User, 'userId')
    user!: User; // Define association with User model
}
