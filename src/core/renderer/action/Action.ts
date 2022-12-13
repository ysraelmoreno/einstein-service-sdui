import { Base } from '../base';

interface IAction {
  url: string;
}

export class Action extends Base {
  constructor(props: IAction) {
    super('action');
    this.props = props;
  }
}
