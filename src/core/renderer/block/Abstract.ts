import { KeeInterface } from '../interfaces/KeeInterface';
import { ResponseInterface } from '../services/block.service';

export abstract class AbstractBlockRenderer {
  abstract renderObject(
    object: any,
  ): Promise<KeeInterface[] | ResponseInterface>;
}
