import { MutableRefObject, useLayoutEffect, useMemo, useRef } from 'react';

import { DragOptions } from '../types/entries';
import { useDragSourceConnector } from './useDragSourceConnector';
import { DragMonitor } from './DragMonitor';

type DragRef = MutableRefObject<HTMLDivElement>;

export default function useDrag(fields?: DragOptions): DragRef {
  const ref = useRef<HTMLDivElement>(null);

  const connector = useDragSourceConnector(fields);
  const monitor = useMemo(() => new DragMonitor(connector), [connector]);

  useLayoutEffect(() => {
    const element = ref.current;
    const sourceId = connector.getHandlerId();

    // set draggable attribute
    element.setAttribute('draggable', 'true');
    element.setAttribute('data-draggable-id', String(sourceId));

    monitor.setup();
  }, [connector, monitor]);

  return ref;
}
