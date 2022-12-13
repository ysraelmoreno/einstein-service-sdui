import { Action } from '../action/Action';
import { Base } from '../base';
import { NumberOrString } from '../interfaces/common';
import { KeeInterface } from '../interfaces/KeeInterface';

interface IColumnProps {
  display?: 'flex' | 'grid' | 'block';
  alignItems?: 'center' | 'end' | 'start' | 'stretch';
  justifyContent?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap?: NumberOrString;
  flex?: NumberOrString;
  margin?: string;
  maxWidth?: string | number;
  width?: string | number;
  marginTop?: string;
  marginBottom?: string;
  borderRadius?: NumberOrString;
  border?: string;
  marginLeft?: string;
  backgroundColor?: string;
  marginRight?: string;
  children: KeeInterface[];
  onClick?: Action;
}

export class Column extends Base {
  constructor(props: IColumnProps) {
    super('column');
    this.props = props;
  }
}
