import { createContext } from 'react';
import { DraggableEntry, DraggableMap } from './types';

export interface IContext {
  register: (entry: DraggableEntry) => void;
  entries: DraggableMap;
}

export const AppContext = createContext<IContext>({} as IContext);
