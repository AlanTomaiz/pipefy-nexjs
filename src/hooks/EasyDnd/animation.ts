import type { Rect } from 'css-box-model';

type MappedProps = {
  offsetX: number;
  offsetY: number;
  marginBox: Rect;
  borderBox: Rect;
};

export function getDraggingStyle(dragging: MappedProps) {
  const styles = {
    // Placement
    position: 'fixed',

    top: `${dragging.marginBox.top}px`,
    left: `${dragging.marginBox.left}px`,

    // Sizing
    width: `${dragging.borderBox.width}px`,
    height: `${dragging.borderBox.height}px`,

    // Movement
    transition: 'opacity 0.2s cubic-bezier(0.2, 0, 0, 1) 0s',
    transform: `translate(${dragging.offsetX}px, ${dragging.offsetY}px)`,

    // ## Layering
    zIndex: 5000,

    // Blocking pointer events
    // pointerEvents: 'none',
  };

  return styles;
}
