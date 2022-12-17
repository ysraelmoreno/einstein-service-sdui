import { KeeBlock } from 'src/core/decorators/KeeBlock';
import { AbstractBlockRenderer } from 'src/core/renderer/block/Abstract';
import { KeeText } from 'src/core/renderer/components/Text';
import { KeeInterface } from 'src/core/renderer/interfaces/KeeInterface';
import { Column } from 'src/core/renderer/components/Column';
import { Action } from 'src/core/renderer/action/Action';

@KeeBlock('categories.slider.block')
export class CategoriesSliderBlock extends AbstractBlockRenderer {
  private categories = [
    {
      text: 'Block 1',
    },
    {
      text: 'Block 2',
    },
    {
      text: 'Block 3',
    },
  ];

  async renderObject(object: any): Promise<KeeInterface[]> {
    return [
      new Column({
        backgroundColor: '#f1f1f1',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        minHeight: '500px',
        height: '100%',
        onClick: new Action({
          url: '/products',
        }),
        backgroundImage:
          'url("https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        children: [],
      }),
      new Column({
        minHeight: '500px',
        width: '100%',
        gap: '20px',
        children: [
          new Column({
            backgroundColor: '#f1f1f1',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            height: '100%',
            backgroundPosition: 'center',
            minHeight: '240px',
            onClick: new Action({
              url: '/products',
            }),
            backgroundImage:
              'url("https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80")',
            backgroundSize: 'cover',
            children: [],
          }),
          new Column({
            backgroundColor: '#f1f1f1',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '240px',
            borderRadius: '10px',
            height: '100%',
            backgroundPosition: 'center',
            onClick: new Action({
              url: '/products',
            }),
            backgroundImage:
              'url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: 'cover',
            children: [],
          }),
        ],
      }),
    ];
  }
}
