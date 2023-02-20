import { Menu, MenuItem } from '../components/Attacker/Menu';
import { KeeInterface } from '../interfaces/KeeInterface';
import { AbstractBlockRenderer } from './Abstract';
import * as path from 'path';
import * as fs from 'fs';
import { Render } from '../services/block.service';

export class BlockPageAbstractRenderer extends AbstractBlockRenderer {
  public menu: KeeInterface;
  public items: MenuItem[] = [
    {
      label: 'Home',
      path: '/',
      private: false,
    },
  ];

  public logo = 'http://localhost:4000/static/logo.png';
  public elements: Render;

  constructor() {
    super();
    const menuItems = fs.readFileSync(
      path.join(__dirname, '..', '..', '..', '..', 'config.json'),
      'utf-8',
    );

    const { urls } = JSON.parse(menuItems);

    this.menu = new Menu({
      items: urls,
      logo: 'http://localhost:4000/static/logo.png',
    });
  }

  updateMenu(items) {
    this.menu = new Menu({
      items,
      logo: this.logo,
    });
  }

  async render() {
    return this.elements;
  }
}
