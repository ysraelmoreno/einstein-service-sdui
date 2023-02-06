import { Module } from '@nestjs/common';

import { CartSocketService } from './services/cart.socket.service';

@Module({
  providers: [CartSocketService],
})
export class CartModule {}
