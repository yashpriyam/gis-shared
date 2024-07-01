import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'uploads',
    timestamps: true
})
export class Upload extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    blobId!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    mimetype!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    checksum!: string;

    @Column({
        type: DataType.BIGINT,
        allowNull: true
    })
    sizeInBytes!: number;

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

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    fileName?: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    etag!: string;

    @Column({
        type: DataType.DATE,
        allowNull: true
    })
    lastModified!: Date;

    @Column({
        type: DataType.JSON,
        allowNull: true,
    })
    xMsContentCrc64?: object;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    clientRequestId!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    requestId!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    uploadedFileUrl!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    blobName!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    contentType!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    version!: Date;
}
