import { KeeBlock } from 'src/core/decorators/KeeBlock';
import { AbstractBlockRenderer } from 'src/core/renderer/block/Abstract';
import { KeeText } from 'src/core/renderer/components/Text';
import { KeeInterface } from 'src/core/renderer/interfaces/KeeInterface';
import { Column } from 'src/core/renderer/components/Column';

@KeeBlock('categories.slider.block')
export class CategoriesSliderBlock extends AbstractBlockRenderer {
  private categories = [
    {
      text: 'Block 1',
    },
    {
      text: 'Block 1',
    },
    {
      text: 'Block 1',
    },
  ];

  async renderObject(object: any): Promise<KeeInterface[]> {
    return [
      ...this.categories.map(
        (category) =>
          new Column({
            backgroundColor: '#f1f1f1',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '500px',
            height: '100%',
            children: [
              new KeeText({
                text: category.text,
                type: 'span',
              }),
            ],
          }),
      ),
    ];
  }
}
