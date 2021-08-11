import { DraggableEntry, DraggableMap, Registry } from '../types';

export default function CreateRegistry(): Registry {
  const entries: DraggableMap = {};

  function register(entry: DraggableEntry): void {
    entries[entry.uniqueId] = entry;
  }

  function update(teste, uniqueId): void {
    Object.assign(entries[uniqueId], teste);
  }

  return { register, update, entries };
}
