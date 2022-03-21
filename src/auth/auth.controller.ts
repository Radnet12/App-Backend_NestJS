import { ApiResponse } from "@nestjs/swagger";
import { ApiOperation } from "@nestjs/swagger";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./../users/dto/createUser.dto";
import { Body, Controller, Post } from "@nestjs/common";

@ApiTags("AuthController")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: "Запрос на вход" })
  @ApiResponse({ status: 200, type: "token" })
  @Post("/login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: "Регистрация юзера" })
  @ApiResponse({ status: 200, type: "token" })
  @Post("/registration")
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
