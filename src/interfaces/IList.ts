import { ICards } from './ICards';

export interface IList {
  title: string;
  creatable: boolean;
  cards: ICards[];
}
