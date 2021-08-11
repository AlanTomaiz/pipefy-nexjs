import { DraggablePoint } from '../types';

export default class DragHandler {
  private state: DraggablePoint;

  private register;

  constructor(state) {
    this.register = state;
  }

  public startMouseDrag(point: DraggablePoint): void {
    this.state = point;

    this.bindEvents();
  }

  onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    // const offsetX = clientX - this.state.X;
    // const offsetY = clientY - this.state.Y;

    // console.log(offsetX, offsetY);
  };

  onMouseUp = () => {
    this.unbindEvents();
  };

  private bindEvents(): void {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  private unbindEvents(): void {
    window.removeEventListener('mousemove', this.onMouseMove);
  }
}
