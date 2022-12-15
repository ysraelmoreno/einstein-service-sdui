import { KeeInterface } from 'src/core/renderer/interfaces/KeeInterface';
import { KeeBlock } from 'src/core/decorators/KeeBlock';
import { BlockPageAbstractRenderer } from 'src/core/renderer/block/BlockPageAbstract';
import { Row } from 'src/core/renderer/components/Row';
import { Container } from 'src/core/renderer/components/Container';
import { BlockService } from 'src/core/renderer/services/block.service';
import { KeeText } from 'src/core/renderer/components/Text';

@KeeBlock('home.page')
export class HomeBlock extends BlockPageAbstractRenderer {
  constructor(private readonly blockService: BlockService) {
    super();
  }

  async renderObject(): Promise<KeeInterface[]> {
    return this.render();
  }

  async render(): Promise<KeeInterface[]> {
    const categoriesSlider = await this.blockService.render(
      'categories.slider.block',
    );
    return [
      new Row({
        backgroundColor: '#1c1c1c',
        padding: '10px',
        marginBottom: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        children: [
          new KeeText({
            text: 'Test',
            styles: {
              color: 'white',
            },
          }),
        ],
      }),
      new Container({
        children: [
          new Row({
            gap: '10px',
            alignItems: 'start',
            justifyContent: 'space-between',
            marginTop: '10px',
            children: [...(categoriesSlider as KeeInterface[])],
          }),
        ],
      }),

      new Container({
        marginTop: '20px',
        marginBottom: '20px',
        children: [
          new KeeText({
            text: 'Best sellers',
            type: 'h1',
            styles: {
              textAlign: 'center',
            },
          }),
        ],
      }),
    ];
  }
}
