import { Base } from '../base';
import { KeeInterface } from '../interfaces/KeeInterface';

export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  POST = 'POST',
  PATCH = 'PATCH',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface IPartialUpdates {
  targetNodeId: string;
  widget: KeeInterface;
}
interface IAction {
  url?: string;
  type?: ActionType;
  localStorage?: {
    [key: string]: string[];
  };
  state?: string[];
  partialUpdates?: IPartialUpdates[];
  goTo?: string;
}

export class Action extends Base {
  constructor(props: IAction) {
    super('action');
    this.props = props;
  }
}
