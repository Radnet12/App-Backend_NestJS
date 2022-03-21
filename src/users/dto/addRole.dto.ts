import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @IsString({ message: "Поле должно быть строкой" })
  readonly value: string;

  @IsNumber({}, { message: "Поле должно быть числом" })
  readonly userId: number;
}
