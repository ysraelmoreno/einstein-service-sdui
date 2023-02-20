import type * as CSS from 'csstype';
import { Base } from '../base';

export interface InputProps extends CSS.Properties {
  placeholder?: string;
  label?: string;
  name?: string;
  id?: string;
  type?: 'number' | 'text' | 'email' | 'date' | 'password';
}

export class Input extends Base {
  public props: InputProps;

  constructor(props: InputProps) {
    super('input');
    this.props = props;
  }
}
