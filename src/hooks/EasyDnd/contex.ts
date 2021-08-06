import { createContext } from 'react';
import { Registry } from './types/entries';

export type IContext = {
  contextId: string;
  registry: Registry;
};

export const ApiContext = createContext<IContext>(null);
