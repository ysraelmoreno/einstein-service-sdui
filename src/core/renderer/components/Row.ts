import { Base } from '../base';
import { KeeInterface } from '../interfaces/KeeInterface';
import type * as CSS from 'csstype';

interface IRowProps extends CSS.Properties {
  children: KeeInterface[];
}

export class Row extends Base {
  constructor(props: IRowProps) {
    super('row');
    this.props = props;
  }
}
