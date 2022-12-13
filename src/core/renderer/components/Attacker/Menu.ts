import { Base } from '../../base';

export interface MenuItem {
  url: string;
  label: string;
}

export interface MenuProps {
  items: MenuItem[];
  logo: string;
}

export class Menu extends Base {
  constructor(props: MenuProps) {
    super('menu');
    this.props = props;
  }
}
