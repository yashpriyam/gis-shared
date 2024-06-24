import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserModelDataset } from './index';

@Table({
    tableName: 'user_model_dataset_annotations',
    timestamps: true
})
export class UserModelDatasetAnnotation extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => UserModelDataset)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    datasetId!: number;

    @Column({
        type: DataType.JSON,
        allowNull: false
    })
    annotation!: object;

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

    @BelongsTo(() => UserModelDataset, 'datasetId')
    dataset!: UserModelDataset; // Define association with UserModelDataset
}
