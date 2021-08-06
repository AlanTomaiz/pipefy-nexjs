import { Registry, DraggableEntry, DropableEntry } from './types/entries';

type DraggableMap = {
  [id: string]: DraggableEntry;
};

type DroppableMap = {
  [id: string]: DropableEntry;
};

export type RegistryEntries = {
  draggables: DraggableMap;
  droppables: DroppableMap;
};

export default function CresteRegistry(): Registry {
  const entries: RegistryEntries = {
    draggables: {},
    droppables: {},
  };

  function registerDrag(entry: DraggableEntry): void {
    entries.draggables[entry.uniqueId] = entry;

    console.log(entries.draggables);
  }

  function clean(): void {
    entries.draggables = {};
    entries.droppables = {};
  }

  return { registerDrag, clean };
}