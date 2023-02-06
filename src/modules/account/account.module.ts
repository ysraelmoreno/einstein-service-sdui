import { Module } from '@nestjs/common';
import { AccountController } from './controller/account.controller';

@Module({
  controllers: [AccountController],
})
export class AccountModule {}
