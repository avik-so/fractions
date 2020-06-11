import { Bottles } from './bottles';
export class BottleNumber {
  private iteration: number = -1;
  constructor(iteration: number) {
    this.iteration = iteration;
  }
  public container(): string {
    return 'bottles';
  }
  public action(): string {
    return 'Take one down and pass it around';
  }
  public successor(): BottleNumber {
    return BottleNumber.getBottle(this.iteration - 1);
  }
  public quantity(): string {
    return this.iteration.toString();
  }
  static getBottle(verse: number): BottleNumber {
    const bottleMap = {
      0: new ZeroBottles(),
      1: new OneBottle(),
      6: new SixBottles(),
    };
    return bottleMap.hasOwnProperty(verse)
      ? bottleMap[verse]
      : new BottleNumber(verse);
  }
}

class ZeroBottles extends BottleNumber {
  constructor() {
    super(0);
  }
  public action(): string {
    return 'Go to the store and buy some more';
  }

  public successor(): BottleNumber {
    return new BottleNumber(99);
  }
  public quantity(): string {
    return 'no more';
  }
}

class OneBottle extends BottleNumber {
  constructor() {
    super(1);
  }
  public action(): string {
    return 'Take it down and pass it around';
  }
  bottle;
  public container(): string {
    return 'bottle';
  }
}

class SixBottles extends BottleNumber {
  constructor() {
    super(6);
  }
  public quantity(): string {
    return '1';
  }

  public container(): string {
    return 'six-pack';
  }
}
