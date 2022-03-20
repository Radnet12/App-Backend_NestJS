import { Role } from "src/roles/roles.model";
import { ApiResponse } from "@nestjs/swagger";
import { ApiOperation } from "@nestjs/swagger";
import { ApiTags } from "@nestjs/swagger";
import { CreateRoleDto } from "./dto/createRole.dto";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";

@ApiTags("RolesController")
@Controller("roles")
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: "Создание роли" })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: "Получение роли по значению" })
  @ApiResponse({ status: 200, type: [Role] })
  @Get("/:value")
  getByValue(@Param("value") value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
