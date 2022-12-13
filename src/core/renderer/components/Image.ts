import { Base } from '../base';

export interface ImageProps {
  url: string;
  maxWidth?: number | string;
  objectFit?: 'cover' | 'contain';
  aspectRatio?: string;
}

export class Image extends Base {
  public props: ImageProps;

  constructor(props: ImageProps) {
    super('image');
    this.props = props;
  }
}
