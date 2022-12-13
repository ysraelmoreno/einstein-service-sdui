import { Base } from '../../base';

interface IProductCardProps {
  title: string;
}

export class ProductCard extends Base {
  constructor(props: IProductCardProps) {
    super('product-card');
    this.props = props;
  }
}
