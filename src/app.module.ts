import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { KeeCore } from './core/KeeCore.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    KeeCore.forRoot({
      imports: [HomeModule],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
  ],
})
export class AppModule {}
