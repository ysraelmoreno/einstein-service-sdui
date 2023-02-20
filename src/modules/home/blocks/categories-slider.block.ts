import { KeeBlock } from 'src/core/decorators/KeeBlock';
import { AbstractBlockRenderer } from 'src/core/renderer/block/Abstract';
import { KeeText } from 'src/core/renderer/components/Text';
import { KeeInterface } from 'src/core/renderer/interfaces/KeeInterface';
import { Column } from 'src/core/renderer/components/Column';
import { Action } from 'src/core/renderer/action/Action';
import { Hover } from 'src/core/renderer/action/Hover';
import { EColors } from 'src/core/renderer/constants/colors';
import { ProductsService } from '../services/products.service';

@KeeBlock('categories.slider.block')
export class CategoriesSliderBlock extends AbstractBlockRenderer {
  constructor(private readonly productsService: ProductsService) {
    super();
  }

  async renderObject(): Promise<KeeInterface[]> {
    const categories = await this.productsService.getCategories();

    return categories.slice(0, 3).map(
      (category) =>
        new Column({
          backgroundColor: '#f1f1f1',
          width: '100%',
          justifyContent: 'end',
          alignItems: 'center',
          borderRadius: '10px',
          minHeight: '500px',
          flex: '1',
          transition: 'all 0.5s ease',
          height: '100%',
          onClick: new Action({
            url: '/products',
          }),
          onHover: new Hover({
            flex: '2',
          }),
          backgroundImage: `url("${category.url}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          children: [
            new Column({
              padding: '15px',
              width: '100%',
              height: '100%',
              justifyContent: 'end',
              flex: '1',
              borderRadius: '10px',
              transition: 'all 0.2s ease',
              onHover: new Hover({
                backgroundColor: EColors.BACKGROUND_COLOR_WHITE_0_03,
                flex: '2',
              }),
              children: [
                new KeeText({
                  styles: {
                    color: 'white',
                    textShadow: '1px 1px 10px rgba(0,0,0,0.5)',
                  },
                  type: 'h1',
                  text: category.label,
                }),
              ],
            }),
          ],
        }),
    );
  }
}
