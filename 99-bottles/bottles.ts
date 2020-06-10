import { Composer } from './composer';

export class Bottles {
  static verses(from: number, to: number): any {
    const fullSong = from == 99 && to == 0;
    const type = fullSong ? 'SONG' : 'VERSES';
    return Bottles.composeVerses(from, to, type);
  }

  static verse(bottles: number): any {
    return Bottles.composeVerses(bottles, bottles, 'VERSE');
  }

  private static composeVerses(from: number, to: number, type: string) {
    let verse = `<<-${type}\n`;
    for (let i = from; i >= to; i--) {
      verse += Composer.compose(i) + '\n';
    }
    verse += type;
    return verse;
  }
}
