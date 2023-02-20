import type * as CSS from 'csstype';
import { Base } from '../base';
import { KeeInterface } from '../interfaces/KeeInterface';

export interface ButtonProps {
  children: KeeInterface[];
  type: 'submit' | 'reset' | 'button';
  styles: CSS.Properties;
}

export class Button extends Base {
  public props: ButtonProps;

  constructor(props: ButtonProps) {
    super('button');
    this.props = props;
  }
}
