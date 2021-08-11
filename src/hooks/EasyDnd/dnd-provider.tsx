import { useMemo } from 'react';
import { AppContext } from './dnd-context';
import CreateRegistry from './state/create-registry';
import { Registry } from './types';

export const DndProvider = ({ children }) => {
  const registry: Registry = useMemo(CreateRegistry, []);

  return (
    <AppContext.Provider value={{ registry }}>{children}</AppContext.Provider>
  );
};
