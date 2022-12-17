import { Module } from '@nestjs/common';
import { KeeCore } from 'src/core/KeeCore.module';
import { ProductsPageBlock } from './blocks/products.page.block';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [
    KeeCore.forRoot({
      realm: ProductsModule,
      controllers: [ProductsController],
      providers: [ProductsPageBlock],
      exports: [ProductsPageBlock],
    }),
  ],
})
export class ProductsModule {}
