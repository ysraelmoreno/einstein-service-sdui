import { Action } from '../action/Action';
import { Base } from '../base';
import { KeeInterface } from '../interfaces/KeeInterface';
import type * as CSS from 'csstype';

interface IColumnProps extends CSS.Properties {
  children: KeeInterface[];
  onClick?: Action;
}

export class Column extends Base {
  constructor(props: IColumnProps) {
    super('column');
    this.props = props;
  }
}
