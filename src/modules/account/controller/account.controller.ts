import { Controller, Get } from '@nestjs/common';
import { BlockService } from 'src/core/renderer/services/block.service';

@Controller('account')
export class AccountController {
  constructor(private readonly blockService: BlockService) {}
  @Get('/login')
  login() {
    return this.blockService.render('login.page');
  }
}
