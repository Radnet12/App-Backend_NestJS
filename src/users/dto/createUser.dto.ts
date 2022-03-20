import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "user@gmail.com", description: "Почта пользователя" })
  readonly email: string;

  @ApiProperty({ example: "password1234", description: "Пароль пользователя" })
  readonly password: string;
}
