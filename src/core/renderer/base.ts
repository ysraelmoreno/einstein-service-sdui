export class Base {
  public type: string;
  public key: string;
  public props: any;

  constructor(type: string) {
    this.type = type;
    this.key = this.keyGenerator(type);
  }

  keyGenerator(type: string) {
    return `${type}-${Buffer.from(`${type}-${Math.random() * 100}`).toString(
      'base64',
    )}`;
  }
}
