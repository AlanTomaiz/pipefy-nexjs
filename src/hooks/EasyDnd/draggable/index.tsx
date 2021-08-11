import { useContext, ReactElement } from 'react';

import { AppContext } from '../dnd-context';
import DragHandler from './drag-handler';

interface Idraggable {
  children(style: any): ReactElement;
}

const Draggable: React.FC<Idraggable> = ({ children }) => {
  const { entries, register } = useContext(AppContext);
  const handler = new DragHandler(register);

  const onMouseDown = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;

    event.stopPropagation();
    event.preventDefault();
  };

  const elementProps = {
    onMouseDown,
    // onKeyDown,
    // 'data-draggable-id': uniqueId,
    // draggable: true,
    teste: entries,
  };

  return children(elementProps);
};

export default Draggable;
