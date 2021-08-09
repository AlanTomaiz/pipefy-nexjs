/* eslint class-methods-use-this: "off" */
import { DragConnector } from './DragConnector';
import { noop } from '../Utils';

export class DragMonitor {
  private monitor: DragConnector;

  public constructor(manager: DragConnector) {
    this.monitor = manager;
  }

  private get targetElement(): HTMLElement {
    const sourceId = this.monitor.getHandlerId();

    return document.querySelector(`[data-draggable-id="${sourceId}"]`);
  }

  // set draggable attribute
  public setup(element: HTMLElement): void {
    const sourceId = this.monitor.getHandlerId();
    element.setAttribute('data-draggable-id', String(sourceId));
    element.setAttribute('data-is-dragging', 'false');

    this.addEventListeners(element);
  }

  private handleCollect(): void {
    const options = this.monitor.getOptions();
    this.monitor.collect(options);
  }

  private addEventListeners(element: HTMLElement) {
    element.addEventListener('mousedown', this.handleDragStart);
    // element.addEventListener('mouseup', this.handleDragEnd);
    // element.addEventListener('mouseup', this.handleDragEndCaptured);

    // element.addEventListener('mousemove', this.handleDragOver);
  }

  private validateDraggableElement(element: HTMLElement): boolean {
    return element.dataset.isDragging !== undefined;
  }

  private handleDragStart = () => {
    const element = this.targetElement;
    const validElement = this.validateDraggableElement(element);

    if (!validElement) {
      return;
    }

    element.dataset.isDragging = 'true';

    this.monitor.setDragging(true);
    this.handleCollect();
  };

  // private handleDragOver = event => {
  //   const { isDragging } = this.monitor.getOptions();

  //   if (!isDragging) {
  //     return;
  //   }

  //   const element = this.targetElement;
  //   // element.dataset.isDragging = 'true';

  //   // const eventX = event.clientX - element.offsetLeft;
  //   // const eventY = event.clientY - element.offsetTop;

  //   // console.log(event);

  //   // const dragPreview = element.cloneNode(true);
  //   // dragPreview.id = 'element-dragging';
  //   // dragPreview.style.display = 'block';
  //   // dragPreview.style.width = `${element.offsetWidth}px`;

  //   // this.handleCollect();
  // };

  // private handleDragEndCaptured = () => {
  //   const element = this.targetElement;

  //   element.removeEventListener('mousemove', noop);
  // };

  // private handleDragEnd = () => {
  //   const element = this.targetElement;
  //   element.dataset.isDragging = 'false';

  //   this.monitor.setDragging(false);
  //   this.handleCollect();
  // };
}
