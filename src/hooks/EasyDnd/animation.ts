import type { Rect } from 'css-box-model';

type MappedProps = {
  offsetX: number;
  offsetY: number;
  marginBox: Rect;
  borderBox: Rect;
};

export function getDraggingStyle(dragging: MappedProps) {
  const style = {
    // Placement
    position: 'fixed',

    top: dragging.marginBox.top,
    left: dragging.marginBox.left,

    // Sizing
    width: dragging.borderBox.width,
    height: dragging.borderBox.height,

    // Movement
    transition: 'transform 0.2s, opacity 0.2s cubic-bezier(0.2, 0, 0, 1)',
    transform: `translate(${dragging.offsetX}px, ${dragging.offsetY}px)`,
    opacity: 0.7,

    // ## Layering
    'z-index': 5000,

    // Blocking pointer events
    'pointer-events': 'none',
  };

  return Object.keys(style)
    .map(index => `${index}: ${style[index]}`)
    .join(';');
}
