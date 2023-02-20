import { KeeBlock } from 'src/core/decorators/KeeBlock';
import { BlockPageAbstractRenderer } from 'src/core/renderer/block/BlockPageAbstract';
import { Menu } from 'src/core/renderer/components/Attacker/Menu';
import { Button } from 'src/core/renderer/components/Button';
import { Column } from 'src/core/renderer/components/Column';
import { Input } from 'src/core/renderer/components/Input';
import { KeeText } from 'src/core/renderer/components/Text';
import { Render } from 'src/core/renderer/services/block.service';
import { Row } from 'src/core/renderer/components/Row';
import { Form } from 'src/core/renderer/components/Form';
import { Action, ActionType } from 'src/core/renderer/action/Action';

@KeeBlock('login.page')
export class LoginPageBlock extends BlockPageAbstractRenderer {
  public async renderObject(): Promise<Render> {
    this.menu = new Menu({
      items: [],
      logo: '',
    });

    return [
      new Row({
        children: [
          new Column({
            flex: 1,
            maxWidth: '500px',
            children: [
              new Column({
                flex: 1,
                gap: '20px',
                padding: '10px 50px',
                children: [
                  new KeeText({
                    text: 'Faça seu login',
                  }),
                  new Form({
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    maxWidth: '300px',
                    action: new Action({
                      url: '/login',
                      type: ActionType.POST,
                      state: ['user'],
                      goTo: '/',
                      localStorage: {
                        '@mart:user': ['email', 'id'],
                      },
                    }),
                    children: [
                      new Input({
                        label: 'Email',
                        type: 'email',
                        name: 'email',
                      }),
                      new Input({
                        label: 'Password',
                        name: 'password',
                        type: 'password',
                      }),
                      new Button({
                        styles: {
                          width: '80px',
                        },
                        type: 'submit',
                        children: [
                          new KeeText({
                            text: 'Login',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
                width: '100%',
                maxWidth: '740px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }),
            ],
          }),

          new Column({
            flex: 1,
            height: '100vh',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:
              'url(https://images.unsplash.com/photo-1676486540030-58f013fa8186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)',
            children: [],
          }),
        ],
      }),
    ];
  }
}
