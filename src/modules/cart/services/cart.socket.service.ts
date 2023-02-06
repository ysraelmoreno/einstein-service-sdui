import { OnModuleInit } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { MessageBody, SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(8080, {
  cors: {
    origin: ['http://localhost:5173'],
  },
})
export class CartSocketService implements OnModuleInit {
  @WebSocketServer()
  private server: Server;

  onModuleInit() {
    this.server.on('connection', () => {
      console.log('Cart Socket connected');
    });
  }

  @SubscribeMessage('addItemToCart')
  async newMessage(@MessageBody() body: any) {
    console.log(body);
    this.server.emit('onAddToCart', {
      message: 'Hello world!',
      content: body,
    });
  }
}
