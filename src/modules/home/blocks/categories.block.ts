import { KeeBlock } from 'src/core/decorators/KeeBlock';
import { AbstractBlockRenderer } from 'src/core/renderer/block/Abstract';
import { Column } from 'src/core/renderer/components/Column';
import { Container } from 'src/core/renderer/components/Container';
import { Image } from 'src/core/renderer/components/Image';
import { Row } from 'src/core/renderer/components/Row';
import { KeeText } from 'src/core/renderer/components/Text';
import { KeeInterface } from 'src/core/renderer/interfaces/KeeInterface';
import { ProductsService } from '../services/products.service';

@KeeBlock('categories.block')
export class CategoriesBlock extends AbstractBlockRenderer {
  constructor(private readonly productsService: ProductsService) {
    super();
  }

  public async renderObject(object?: any): Promise<KeeInterface[]> {
    return this.renderContent(object);
  }

  public async renderContent(object: any): Promise<KeeInterface[]> {
    const categories = await this.productsService.getCategories();

    return [
      new Container({
        children: [
          new Row({
            justifyContent: 'space-between',
            children: [
              ...categories.slice(4, categories.length).map(
                (category) =>
                  new Column({
                    alignItems: 'center',
                    children: [
                      new Image({
                        url: category.url,
                        borderRadius: '100px',
                        width: '100px',
                        height: '100px',
                      }),
                      new KeeText({
                        text: category.label,
                        styles: {
                          marginTop: '10px',
                        },
                      }),
                    ],
                  }),
              ),
            ],
          }),
        ],
      }),
    ];
  }
}
