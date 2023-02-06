import { Base } from '../../base';

export interface MenuItem {
  path: string;
  label?: string;
  private?: boolean;
  iconName?: string;
  unloggedMenu?: {
    path: string;
    label?: string;
  };
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
