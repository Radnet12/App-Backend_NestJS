import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";

@Table({ tableName: "user_roles" })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: 1, description: "Айди пользователя" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ForeignKey(() => Role)
  @ApiProperty({ example: "ADMIN", description: "Уникальное значение роли" })
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: "Администратор", description: "Описание роли" })
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;
}
