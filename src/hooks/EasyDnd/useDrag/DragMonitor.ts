/* eslint class-methods-use-this: "off" */
import { calculateBox, Rect } from 'css-box-model';

import { DragConnector } from './DragConnector';
import { getDraggingStyle } from '../animation';

type TouchCoords = {
  x: number;
  y: number;
  marginBox: Rect;
  borderBox: Rect;
};

export class DragMonitor {
  private monitor: DragConnector;

  private touchStart: TouchCoords;

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
    element.addEventListener('mousemove', this.handleDragOver);
    element.addEventListener('mouseup', this.handleDragEnd);
  }

  private handleDragStart = (event: MouseEvent) => {
    const { pageX, pageY } = event;
    const element = this.targetElement;

    const client = element.getBoundingClientRect();
    const computedStyles = window.getComputedStyle(element);

    const { marginBox, borderBox } = calculateBox(client, computedStyles);

    this.touchStart = {
      x: pageX,
      y: pageY,
      marginBox,
      borderBox,
    };
  };

  private handleDragOver = (event: MouseEvent) => {
    if (!this.touchStart) {
      return;
    }

    const { pageX, pageY } = event;
    const element = this.targetElement;

    const offsetX = pageX - this.touchStart.x;
    const offsetY = pageY - this.touchStart.y;

    const auxStyles = {
      offsetX,
      offsetY,
      ...this.touchStart,
    };

    const styles = getDraggingStyle(auxStyles);
    Object.assign(element.style, styles);
  };

  private handleDragEnd = () => {
    delete this.touchStart;

    const element = this.targetElement;
    element.removeAttribute('style');
  };
}
