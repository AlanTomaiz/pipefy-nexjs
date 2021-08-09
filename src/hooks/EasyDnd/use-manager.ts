import { useContext } from 'react';
import { ApiContext } from './contex';

export function useDragDropManager() {
  const { registry } = useContext(ApiContext);

  return registry;
}
