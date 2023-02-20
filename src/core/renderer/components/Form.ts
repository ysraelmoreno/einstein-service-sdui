import type * as CSS from 'csstype';
import { Action } from '../action/Action';
import { Base } from '../base';
import { KeeInterface } from '../interfaces/KeeInterface';

export interface FormProps extends CSS.Properties {
  children: KeeInterface[];
  action: Action;
}

export class Form extends Base {
  public props: FormProps;

  constructor(props: FormProps) {
    super('form');
    this.props = props;
  }
}
