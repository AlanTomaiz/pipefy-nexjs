export type EntryId = string;

export type EntryDimension = {
  width: number;
  height: number;
};

export type EntryOption = {
  [key: string]: any;
  isDragging: boolean;
};

export type DraggableEntry = {
  uniqueId: EntryId;
  options: EntryOption;
  collect: (monit: EntryOption) => void;
};

export type DropableEntry = {
  uniqueId: string;
  options: EntryOption;
};

export type Registry = {
  registerDrag: (entry: DraggableEntry) => void;
  getDragById: (id: EntryId) => DraggableEntry;
  clean: () => void;
};

export type DragOptions = {
  item: { [key: string]: string | number | boolean };
  collect?: (monit: EntryOption) => void;
};
