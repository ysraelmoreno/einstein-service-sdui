import { Base } from '../base';
import { KeeInterface } from '../interfaces/KeeInterface';
import type * as CSS from 'csstype';

export interface IContainerProps extends CSS.Properties {
  children: KeeInterface[];
}

export class Container extends Base {
  constructor(props: IContainerProps) {
    super('container');
    this.props = props;
  }
}
