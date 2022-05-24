import { ConsoleLogger, Controller, Get, Post, Req } from '@nestjs/common';
import { Message, User, Authenticate } from '@geometry-shop/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('users')
  readUsers(): User[] {
    return this.appService.readUsers();
  }

  @Post('login')
  loginUser(@Req() request: any): User {
    return this.appService.login(request.body);
  }
}
