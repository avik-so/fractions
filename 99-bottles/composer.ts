import { BottleNumber } from './bottle-number';

export class Composer {
  public static compose(verse: number): string {
    const bottle: BottleNumber = BottleNumber.getBottle(verse);
    const nextBottle: BottleNumber = BottleNumber.getBottle(bottle.successor());

    const opening = `${this.capitalize(
      this.quantityOfContainer(bottle)
    )} of beer on the wall`;
    const refrain = `${this.quantityOfContainer(bottle)} of beer.`;
    const closing = `${this.quantityOfContainer(
      nextBottle
    )} of beer on the wall.`;

    return `${opening}, ${refrain}
${bottle.action()}, ${closing}`;
  }

  static quantityOfContainer(bottle: BottleNumber) {
    return `${bottle.quantity()} ${bottle.container()}`;
  }
  static capitalize(phrase: string): string {
    return `${phrase[0].toUpperCase()}${phrase.slice(1)}`;
  }
}
