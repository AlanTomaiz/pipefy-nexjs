import { useLayoutEffect, useMemo } from 'react';
import bindEvents, { EventBinding } from './bind-events';

export default function useEvents() {
  const bindStartDrag: EventBinding = useMemo(
    () => ({
      eventName: 'dragstart',
      fn: function handleDragging(event) {
        // console.log(event.target);
      },
    }),
    [],
  );

  useLayoutEffect(() => {
    bindEvents(window, [bindStartDrag]);
  }, [bindStartDrag]);
}
