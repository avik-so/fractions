import { BottleNumber } from './bottle-number';

export class Composer {
  public static compose(verse: number): string {
    const bottle: BottleNumber = BottleNumber.getBottle(verse);

    return (
      `${this.capitalize(this.numOfContainer(bottle))} of beer on the wall, ` +
      `${this.numOfContainer(bottle)} of beer.\n` +
      `${bottle.action()}, ` +
      `${this.numOfContainer(bottle.successor())} of beer on the wall.`
    );
  }

  static numOfContainer(bottle: BottleNumber) {
    return `${bottle.quantity()} ${bottle.container()}`;
  }
  static capitalize(phrase: string): string {
    return `${phrase[0].toUpperCase()}${phrase.slice(1)}`;
  }
}
