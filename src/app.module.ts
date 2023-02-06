import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CartModule } from './modules/cart/cart.module';
import { KeeCore } from './core/KeeCore.module';
import { HomeModule } from './modules/home/home.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    KeeCore.forRoot({
      imports: [HomeModule, ProductsModule, CartModule],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*', 'http://localhost:8080*'],
    }),
  ],
})
export class AppModule {}
