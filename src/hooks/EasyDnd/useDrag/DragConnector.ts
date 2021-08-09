import { DraggableEntry, EntryId, Registry } from '../types/entries';

export class DragConnector {
  private monitor: DraggableEntry;

  public constructor(manager: Registry, sourceId: EntryId) {
    this.monitor = manager.getDragById(sourceId);
  }

  public getHandlerId(): EntryId {
    return this.monitor.uniqueId;
  }

  public isDragging(): boolean {
    return this.monitor.options.isDragging;
  }

  public setDragging(state: boolean): void {
    this.monitor.options.isDragging = state;
  }

  public getOptions() {
    return this.monitor.options;
  }

  public collect(fields) {
    this.monitor.collect(fields);
  }
}
