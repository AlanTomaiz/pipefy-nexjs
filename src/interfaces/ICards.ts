interface ILabel {
  title: string;
  color: string;
}

export interface ICards {
  id: number;
  listIndex: number;
  content: string;
  labels: ILabel[];
  user: string;
}
