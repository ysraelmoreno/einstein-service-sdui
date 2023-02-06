import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;

  onModuleInit() {
    this.registerConsumeEvents();
  }

  private registerConsumeEvents() {
    this.socketClient.on('connect', () => {
      console.log('Connected to gateway');
    });

    this.socketClient.on('onMessage', (data: any) => {
      console.log('data', data);
    });
  }

  constructor() {
    this.socketClient = io('http://localhost:3333');
  }
}
