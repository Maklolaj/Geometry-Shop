import { Body, ConsoleLogger, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Message, User, Authenticate } from '@geometry-shop/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
