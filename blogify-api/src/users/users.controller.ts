import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersSerive: UsersService) {}

  @Get()
  findAll() {
    return this.usersSerive.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersSerive.getUserById(id);
  }

  @Post()
  create(@Body() createUserDto: any) {
    return this.usersSerive.createUser(createUserDto);
  }
}
