import { KeeInterface } from 'src/core/renderer/interfaces/KeeInterface';
import { Column } from 'src/core/renderer/components/Column';
import { KeeBlock } from 'src/core/decorators/KeeBlock';
import { ProductsService } from '../services/products.service';
import { BlockPageAbstractRenderer } from 'src/core/renderer/block/BlockPageAbstract';
import { Row } from 'src/core/renderer/components/Row';
import { Image } from 'src/core/renderer/components/Image';
import { KeeText } from 'src/core/renderer/components/Text';
import { Container } from 'src/core/renderer/components/Container';
import { Action } from 'src/core/renderer/action/Action';

@KeeBlock('home.page')
export class HomeBlock extends BlockPageAbstractRenderer {
  constructor(private readonly productsService: ProductsService) {
    super();
  }

  async renderObject(): Promise<KeeInterface[]> {
    return this.render();
  }

  private async renderCard() {
    const products = await this.productsService.getProducts();

    return products.map(
      (product) =>
        new Column({
          maxWidth: '220px',
          width: '100%',
          onClick: new Action({
            url: `/products/${product.id}`,
          }),
          children: [
            new Image({
              url: product.images[0],
              maxWidth: '200px',
              aspectRatio: '1/1',
              objectFit: 'cover',
            }),
            new KeeText({
              text: product.title,
              type: 'h4',
            }),
            new KeeText({
              text: product.category,
              styles: {
                color: '#b6b4b4',
              },
            }),
          ],
        }),
    );
  }

  async render(): Promise<KeeInterface[]> {
    return [
      new Column({
        display: 'flex',
        gap: 10,
        children: [
          new Container({
            children: [
              new Row({
                gap: 20,
                alignItems: 'start',
                justifyContent: 'center',
                marginTop: '10px',
                children: [],
              }),
            ],
          }),
        ],
      }),
    ];
  }
}
