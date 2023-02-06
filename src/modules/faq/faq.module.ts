import { Module } from '@nestjs/common';
import { KeeCore } from 'src/core/KeeCore.module';

@Module({
  imports: [
    KeeCore.forRoot({
      realm: FAQModule,
    }),
  ],
})
export class FAQModule {}
