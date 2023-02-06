import { Base } from '../base';

export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
}

interface IAction {
  url?: string;
  type?: ActionType;
}

export class Action extends Base {
  constructor(props: IAction) {
    super('action');
    this.props = props;
  }
}
