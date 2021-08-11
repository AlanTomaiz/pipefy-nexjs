import { useState, MutableRefObject, useRef } from 'react';

import { Provider } from '../types';
import useUniqueId from '../unique-id';

type DragRef = MutableRefObject<HTMLDivElement>;

export default function useDrop(): DragRef {
  const ref = useRef<HTMLDivElement>(null);
  const dropableId = useUniqueId('dnd');

  // const [state, setState] = useState();

  return ref;
}
