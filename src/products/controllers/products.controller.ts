import { Controller, Get } from '@nestjs/common';
import {
  BlockService,
  ResponseInterface,
} from 'src/core/renderer/services/block.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly blockService: BlockService) {}

  @Get()
  async list(): Promise<ResponseInterface> {
    const productPage = await this.blockService.render('products.page');

    return productPage as ResponseInterface;
  }
}
