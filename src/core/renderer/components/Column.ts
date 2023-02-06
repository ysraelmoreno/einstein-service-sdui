import { Action } from '../action/Action';
import { Base } from '../base';
import { KeeInterface } from '../interfaces/KeeInterface';
import type * as CSS from 'csstype';
import { Hover } from '../action/Hover';

interface IColumnProps extends CSS.Properties {
  children: KeeInterface[];
  onClick?: Action;
  onHover?: Hover;
}

export class Column extends Base {
  constructor(props: IColumnProps) {
    super('column');
    this.props = props;
  }
}
