import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from "sequelize-typescript";
import { Action, Resource } from "./index"; // Adjust the path based on your project structure

@Table({
  tableName: "operations",
  timestamps: false,
})
export class Operation extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => Action)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  actionId!: number;

  @ForeignKey(() => Resource)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  resourceId!: number;
}
