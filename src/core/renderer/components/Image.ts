import { Base } from '../base';
import type * as CSS from 'csstype';

export interface ImageProps extends CSS.Properties {
  url: string;
}

export class Image extends Base {
  public props: ImageProps;

  constructor(props: ImageProps) {
    super('image');
    this.props = props;
  }
}
