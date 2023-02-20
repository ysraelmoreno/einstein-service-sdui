import { Module } from '@nestjs/common';
import { KeeCore } from 'src/core/KeeCore.module';
import { LoginPageBlock } from './blocks/login.page.block';
import { AccountController } from './controller/account.controller';
import { LoginController } from './controller/login.controller';
import { LoginService } from './services/login.service';

@Module({
  imports: [
    KeeCore.forRoot({
      realm: AccountModule,
      controllers: [AccountController, LoginController],
      providers: [LoginPageBlock, LoginService],
      exports: [LoginPageBlock],
    }),
  ],
})
export class AccountModule {}
