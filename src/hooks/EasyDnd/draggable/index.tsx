import {
  useState,
  useCallback,
  useMemo,
  MutableRefObject,
  useRef,
  useContext,
} from 'react';
import { AppContext } from '../dnd-context';

import { DraggablePoint, Provider } from '../types';
import useUniqueId from '../unique-id';
import DragHandler from './drag-handler';

type DragRef = MutableRefObject<HTMLDivElement>;

export default function useDrag(): [Provider, DragRef] {
  const { registry } = useContext(AppContext);

  const ref = useRef<HTMLDivElement>(null);
  const uniqueId = useUniqueId('dnd');
  registry.register({ uniqueId });

  const handler = new DragHandler(registry, uniqueId);

  const { entries } = registry;

  const testeStyle2 = useMemo(
    () => entries[uniqueId].style,
    [entries, uniqueId],
  );

  console.log(testeStyle2);

  const onMouseDown = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;

    event.stopPropagation();
    event.preventDefault();

    const { width, height } = window.getComputedStyle(ref.current);

    const point: DraggablePoint = {
      X: clientX,
      Y: clientY,
      width,
      height,
    };

    handler.startMouseDrag(point);

    console.log(testeStyle2);
  };

  const elementProps = {
    onMouseDown,
    // onKeyDown,
    'data-draggable-id': uniqueId,
    draggable: true,
  };

  return [elementProps, ref];
}
