import { Action } from '../renderer/action/Action';

export class Response {
  public action: Action;

  constructor(action: Action) {
    this.action = action;
  }
}
