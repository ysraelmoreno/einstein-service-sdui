import { Module } from '@nestjs/common';
import { KeeCore } from 'src/core/KeeCore.module';
import { CartModule } from '../cart/cart.module';
import { CartSocketService } from '../cart/services/cart.socket.service';
import { CategoriesSliderBlock } from './blocks/categories-slider.block';
import { CategoriesBlock } from './blocks/categories.block';
import { HomeBlock } from './blocks/home.page.block';
import { HomeController } from './controllers/home.controller';
import { HomeService } from './services/home.service';
import { ProductsService } from './services/products.service';

@Module({
  imports: [
    KeeCore.forRoot({
      realm: HomeModule,
      controllers: [HomeController],
      exports: [HomeBlock, CategoriesSliderBlock, CategoriesBlock],
      providers: [
        HomeService,
        HomeBlock,
        ProductsService,
        CategoriesSliderBlock,
        CategoriesBlock,
      ],
    }),
    CartModule,
  ],
})
export class HomeModule {}
