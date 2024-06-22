import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Workspace, Assessment } from "./index";

@Table({
  tableName: "workspace_assessments",
  timestamps: true,
})
export class WorkspaceAssessment extends Model {
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

  @ForeignKey(() => Assessment)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  assessmentId!: number;

  @BelongsTo(() => Assessment, "assessmentId")
  assessment!: Assessment; // Define association with Assessment model

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  from!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  to!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  updatedAt!: Date;
}
