export type EntryDimension = {
  width: number;
  height: number;
};

export type EntryOption = {
  [key: string]: any;
};

export type DraggableEntry = {
  uniqueId: string;
  options: EntryOption;
  dimension: EntryDimension;
};

export type DropableEntry = {
  uniqueId: string;
  options: EntryOption;
};

export type Registry = {
  registerDrag: (entry: DraggableEntry) => void;
  clean: () => void;
};
