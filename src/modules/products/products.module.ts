import { Module } from '@nestjs/common';
import { KeeCore } from 'src/core/KeeCore.module';
import { ProductsPageBlock } from './blocks/products.page.block';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [
    KeeCore.forRoot({
      realm: ProductsModule,
      providers: [ProductsPageBlock],
      exports: [ProductsPageBlock],
      controllers: [ProductsController],
    }),
  ],
})
export class ProductsModule {}
