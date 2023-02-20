import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlockService } from 'src/core/renderer/services/block.service';
import { LoginService } from '../services/login.service';

@Controller('login')
export class LoginController {
  constructor(
    private readonly blockService: BlockService,
    private readonly loginService: LoginService,
  ) {}
  @Get()
  login() {
    return this.blockService.render('login.page');
  }

  @Post()
  loginUser(@Body() body: any) {
    return this.loginService.login(body);
  }
}
