import {
  Table,
  Column,
  Model as SeqModel,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Workspace, Model } from "./index";

@Table({
  tableName: "workspace_models",
  timestamps: false,
})
export class WorkspaceModel extends SeqModel {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => Workspace)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  workspaceId!: number;

  @BelongsTo(() => Workspace, "workspaceId")
  workspace!: Workspace; // Define association with Workspace model

  @ForeignKey(() => Model)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  modelId!: number;

  @BelongsTo(() => Model, "modelId")
  model!: Model; // Define association with Model model
}
