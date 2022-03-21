import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@gmail.com", description: "Почта пользователя" })
  @IsString({ message: "Поле должно быть строкой" })
  @IsEmail({}, { message: "Некорректный email" })
  readonly email: string;

  @IsString({ message: "Поле должно быть строкой" })
  @Length(4, 16, {
    message: "Пароль должен содержать минимум 4  символа, максимум 16 символов",
  })
  @ApiProperty({ example: "password1234", description: "Пароль пользователя" })
  readonly password: string;
}
