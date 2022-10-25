import { Body, Controller, Get, Param } from '@nestjs/common';
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
}
