import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserModel } from './index';

@Table({
    tableName: 'user_model_parameters',
    timestamps: true
})
export class UserModelParameter extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    modelId!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    parameter?: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    slug?: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    value?: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    type?: string;

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

    @BelongsTo(() => UserModel, 'modelId')
    userModel!: UserModel; // Define association with UserModel
}
