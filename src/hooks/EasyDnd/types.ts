export type EntryId = string;

export type EntryOption = {
  [key: string]: any;
  isDragging: boolean;
};

export interface DraggableEntry {
  uniqueId: EntryId;
  // options: EntryOption;
  style?: any;
}

export interface DraggableMap {
  [id: string]: DraggableEntry;
}

export type Registry = {
  register: (entry: DraggableEntry) => void;
  update: (teste, uniqueId) => void;
  entries: DraggableMap;
};

export interface Provider {
  onMouseDown?: (event: React.MouseEvent) => void;
  'data-draggable-id': EntryId;
  draggable: boolean;
  style?: any;
}

export interface DraggablePoint {
  X: number;
  Y: number;
  width: string;
  height: string;
}
