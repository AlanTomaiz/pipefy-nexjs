import { useEffect, useMemo } from 'react';
import bindEvent, { EventBinding } from './bind-events';

export default function useEvents() {
  const bindStartDrag: EventBinding = useMemo(
    () => ({
      eventName: 'dragstart',
      fn: function handleDragging(event) {
        console.log(event.target);
      },
    }),
    [],
  );

  useEffect(() => {
    bindEvent(window, [bindStartDrag]);
  }, [bindStartDrag]);
}
