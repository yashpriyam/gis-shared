import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'layer_details',
  timestamps: false,
})
export class LayerDetails extends Model {
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  layername!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  original_names!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type!: string;

  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  layer_columns!: object;
}
