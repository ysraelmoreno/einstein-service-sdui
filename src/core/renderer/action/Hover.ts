import { Base } from '../base';
import type * as CSS from 'csstype';

type IHover = CSS.Properties;

export class Hover extends Base {
  constructor(props: IHover) {
    super('hover');
    this.props = props;
  }
}
