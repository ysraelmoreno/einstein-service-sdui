import { Base } from '../base';

export interface IKeeTextStyles {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
}

export interface IKeeTextProps {
  text: string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  styles?: IKeeTextStyles;
}

export class KeeText extends Base {
  public props: IKeeTextProps;

  constructor(props: IKeeTextProps) {
    super('text');
    this.props = props;
  }
}
