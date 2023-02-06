import { KeeBlock } from 'src/core/decorators/KeeBlock';
import { BlockPageAbstractRenderer } from 'src/core/renderer/block/BlockPageAbstract';
import { KeeText } from 'src/core/renderer/components/Text';
import { KeeInterface } from 'src/core/renderer/interfaces/KeeInterface';
import { ResponseInterface } from 'src/core/renderer/services/block.service';

@KeeBlock('products.page')
export class ProductsPageBlock extends BlockPageAbstractRenderer {
  async renderObject() {
    return [
      new KeeText({
        text: 'Products',
      }),
    ];
  }
}
