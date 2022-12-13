import { Base } from '../base';
import { NumberOrString } from '../interfaces/common';
import { KeeInterface } from '../interfaces/KeeInterface';

export interface IContainerProps {
  maxWidth?: NumberOrString;
  height?: NumberOrString;
  width?: NumberOrString;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  backgroundColor?: string;
  children: KeeInterface[];
}

export class Container extends Base {
  constructor(props: IContainerProps) {
    super('container');
    this.props = props;
  }
}
