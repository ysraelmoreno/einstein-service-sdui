import { Render } from '../services/block.service';

export abstract class AbstractBlockRenderer {
  public renderObject(object?: any): Promise<Render> {
    return new Promise((resolve) => resolve([]));
  }
}
