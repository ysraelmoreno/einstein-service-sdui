import { Base } from '../base';
import * as CSS from 'csstype';

interface IGenericComponentProps {
  type: string;
  children: any;
  styles: CSS.Properties;
}

export class GenericComponent extends Base {
  constructor(public props: IGenericComponentProps) {
    super(props.type);
    this.key = props.type;
    this.type = props.type;
    delete props.type;
  }
}
