/* eslint class-methods-use-this: "off" */
import { DragConnector } from './DragConnector';

export class DragMonitor {
  private monitor: DragConnector;

  public constructor(manager: DragConnector) {
    this.monitor = manager;
  }

  private get targetElement(): HTMLElement {
    const sourceId = this.monitor.getHandlerId();

    return document.querySelector(`[data-draggable-id="${sourceId}"]`);
  }

  public setup(): void {
    const element = this.targetElement;

    if (!element) {
      return;
    }

    this.addEventListeners(element);
  }

  private addEventListeners(element: HTMLElement) {
    element.addEventListener('dragstart', this.handleDragStart);
    // element.addEventListener('dragover', this.handleDragOver);
    element.addEventListener('dragend', this.handleDragEnd);
  }

  private handleDragStart = () => {
    this.monitor.setDragging(true);

    this.handleCollect();
  };

  private handleDragEnd = () => {
    this.monitor.setDragging(false);

    this.handleCollect();
  };

  private handleCollect(): void {
    const options = this.monitor.getOptions();
    this.monitor.collect(options);
  }
}
