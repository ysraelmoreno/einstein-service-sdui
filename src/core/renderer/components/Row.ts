import { Base } from '../base';
import { NumberOrString } from '../interfaces/common';
import { KeeInterface } from '../interfaces/KeeInterface';

interface IRowProps {
  alignItems?: 'center' | 'end' | 'start' | 'stretch';
  justifyContent?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap?: NumberOrString;
  children: KeeInterface[];
  flex?: number;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export class Row extends Base {
  constructor(props: IRowProps) {
    super('row');
    this.props = props;
  }
}
