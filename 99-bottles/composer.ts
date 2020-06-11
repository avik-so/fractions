import { BottleNumber } from './bottle-number';

export class Composer {
  public static compose(verse: number): string {
    const bottle: BottleNumber = BottleNumber.getBottle(verse);
    return bottle.toString();
  }
}
