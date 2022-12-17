import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { KeeCore } from './core/KeeCore.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    KeeCore.forRoot({
      imports: [HomeModule, ProductsModule],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
  ],
})
export class AppModule {}
