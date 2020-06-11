import { BottleNumber } from './bottle-number';

export class Composer {
  public static compose(verse: number): string {
    const bottle: BottleNumber = BottleNumber.getBottle(verse);

    return (
      `${this.capitalize(bottle.numOfContainer())} of beer on the wall, ` +
      `${bottle.numOfContainer()} of beer.\n` +
      `${bottle.action()}, ` +
      `${bottle.successor().numOfContainer()} of beer on the wall.`
    );
  }

  static capitalize(phrase: string): string {
    return `${phrase[0].toUpperCase()}${phrase.slice(1)}`;
  }
}
