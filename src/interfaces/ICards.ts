interface ILabel {
  title: string;
  color: string;
}

export interface ICards {
  id: number;
  content: string;
  labels: ILabel[];
  user: string;
}
