import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  private users = [
    {
      id: 1,
      email: 'ysraelmoreno02@gmail.com',
      password: '123456',
    },
    {
      id: 2,
      email: 'ysraelmoreno@gmail.com',
      password: '123456',
    },
  ];

  public login(credentials: { email: string; password: string }) {
    const findUserByEmail = this.users.find(
      (user) => user.email === credentials.email,
    );

    if (!findUserByEmail) {
      return;
    }

    delete findUserByEmail.password;

    return findUserByEmail;
  }
}
