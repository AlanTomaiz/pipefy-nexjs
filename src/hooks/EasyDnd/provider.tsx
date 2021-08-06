/* eslint no-use-before-define: "off" */
import { useMemo } from 'react';

import { Registry } from './types/entries';
import { IContext, ApiContext } from './contex';
import CresteRegistry from './registry';
import useUniqueId from './unique-id';
import useEvents from './use-events';

export const DndProvider = ({ children }) => {
  const contextId = useUniqueId('esd-provider');
  const registry: Registry = useMemo(CresteRegistry, []);

  useEvents();

  const appContext: IContext = useMemo(
    () => ({ contextId, registry }),
    [contextId, registry],
  );

  return (
    <ApiContext.Provider value={appContext}>{children}</ApiContext.Provider>
  );
};
