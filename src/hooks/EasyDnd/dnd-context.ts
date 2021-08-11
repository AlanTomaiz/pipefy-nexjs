import { createContext } from 'react';
import { Registry } from './types';

export interface IContext {
  registry: Registry;
}

export const AppContext = createContext<IContext>({} as IContext);
