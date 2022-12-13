import { Module } from '@nestjs/common';
import { KeeCore } from 'src/core/KeeCore.module';
import { HomeBlock } from './blocks/home.page.block';
import { HomeController } from './controllers/home.controller';
import { HomeService } from './services/home.service';
import { ProductsService } from './services/products.service';

@Module({
  imports: [
    KeeCore.forRoot({
      realm: HomeModule,
      controllers: [HomeController],
      providers: [HomeService, HomeBlock, ProductsService],
      exports: [HomeBlock],
    }),
  ],
})
export class HomeModule {}
