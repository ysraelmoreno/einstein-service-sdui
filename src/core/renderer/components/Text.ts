import { Base } from '../base';
import type * as CSS from 'csstype';

export interface IKeeTextStyles extends CSS.Properties {
  color?: string;
}

export interface IKeeTextProps {
  text: string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  styles?: IKeeTextStyles;
}

export class KeeText extends Base {
  public props: IKeeTextProps;

  constructor(props: IKeeTextProps) {
    super('text');
    this.props = props;
  }
}
