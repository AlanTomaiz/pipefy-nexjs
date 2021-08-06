import { ICards } from './ICards';

export interface IList {
  index: number;
  title: string;
  creatable: boolean;
  cards: ICards[];
  done: boolean;
}
