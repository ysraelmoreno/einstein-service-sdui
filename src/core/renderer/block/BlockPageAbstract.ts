import { Menu, MenuItem } from '../components/Attacker/Menu';
import { KeeInterface } from '../interfaces/KeeInterface';
import { ResponseInterface } from '../services/block.service';
import { AbstractBlockRenderer } from './Abstract';
import * as path from 'path';
import * as fs from 'fs';

export class BlockPageAbstractRenderer extends AbstractBlockRenderer {
  public menu: KeeInterface;
  public items: MenuItem[] = [
    {
      label: 'Home',
      url: '/',
    },
  ];
  public logo = 'http://localhost:3000/logo.png';

  constructor() {
    super();
    const menuItems = fs.readFileSync(
      path.join(__dirname, '..', '..', '..', '..', 'config.json'),
      'utf-8',
    );

    const { urls } = JSON.parse(menuItems);

    this.menu = new Menu({
      items: urls,
      logo: 'http://localhost:3000/logo.png',
    });
  }

  updateMenu(items) {
    this.menu = new Menu({
      items,
      logo: this.logo,
    });
  }

  async renderObject(): Promise<ResponseInterface | KeeInterface[]> {
    return {} as ResponseInterface;
  }
}
