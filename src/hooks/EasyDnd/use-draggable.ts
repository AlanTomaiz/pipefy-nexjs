import { useContext, useLayoutEffect, useRef, useState } from 'react';
import { ApiContext } from './contex';
import useUniqueId from './unique-id';

type DragOptions = {
  [key: string]: string | number | boolean;
}

export default function useDrag(fields?: DragOptions) {
  const ref = useRef<HTMLDivElement>(null);

  const [item, setItem] = useState(fields);
  const { registry } = useContext(ApiContext);
  const uniqueId = useUniqueId('dnd-test');

  function register() {
    console.log('teste ref')
    console.log(ref)
    // const { ref, item } = fields;

    // const dimension = { width: ref.offsetWidth, height: ref.offsetHeight };

    // // set draggable attribute
    // ref.setAttribute('draggable', 'true');
    // ref.setAttribute('data-draggable-id', uniqueId);

    // registry.registerDrag({ uniqueId, dimension, options: item });
    // // setData(item);
  }

  useLayoutEffect(() => {
    register();
  }, []);

  return [item, ref];
}
