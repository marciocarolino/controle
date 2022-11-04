import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async userAll(): Promise<any> {
    return this.userService.userAll();
  }

  @Get(':id')
  async userGetById(@Param() id: number): Promise<any> {
    return this.userService.userGetById(id);
  }

  @Post()
  async createUser(@Body() user: UserDTO): Promise<any> {
    return this.userService.createUser(user);
  }
}
