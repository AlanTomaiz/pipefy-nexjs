import { useMemo } from 'react';
import { DragOptions, EntryId } from '../types/entries';
import { useDragDropManager } from '../use-manager';
import { DragConnector } from './DragConnector';
import useUniqueId from '../unique-id';

export function useDragSourceConnector(sourceOptions: DragOptions) {
  const manager = useDragDropManager();
  const uniqueId = useUniqueId('dnd-test') as EntryId;

  const { item: options, collect } = sourceOptions;

  manager.registerDrag({ uniqueId, options, collect });

  return useMemo(
    () => new DragConnector(manager, uniqueId),
    [uniqueId, manager],
  );
}
