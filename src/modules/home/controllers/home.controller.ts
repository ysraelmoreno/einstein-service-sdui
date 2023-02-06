import { Controller, Get } from '@nestjs/common';
import {
  BlockService,
  ResponseInterface,
} from 'src/core/renderer/services/block.service';

@Controller('/')
export class HomeController {
  constructor(private readonly blockService: BlockService) {}

  @Get()
  async list(): Promise<ResponseInterface> {
    const homePage = await this.blockService.render('home.page');

    return homePage as ResponseInterface;
  }
}
