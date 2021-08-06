import { useContext } from 'react';
import { ApiContext } from './contex';
import useUniqueId from './unique-id';

type IUseDrag = {
  ref: HTMLDivElement;
  item: { [key: string]: string | number | boolean };
};

export default function useDrag() {
  const { registry } = useContext(ApiContext);
  const uniqueId = useUniqueId('dnd-test');

  function register(fields: IUseDrag) {
    const { ref, item } = fields;

    const dimension = { width: ref.offsetWidth, height: ref.offsetHeight };

    // set draggable attribute
    ref.setAttribute('draggable', 'true');
    ref.setAttribute('data-draggable-id', uniqueId);

    registry.registerDrag({ uniqueId, dimension, options: item });
  }

  return { register };
}
