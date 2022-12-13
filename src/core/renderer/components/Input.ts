import { Base } from '../base';

export interface InputStyles {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
}

export interface InputProps {
  placeholder?: string;
  label?: string;
  type?: 'number' | 'text' | 'email' | 'date';
}

export class Input extends Base {
  public props: InputProps;

  constructor(props: InputProps) {
    super('input');
    this.props = props;
  }
}
