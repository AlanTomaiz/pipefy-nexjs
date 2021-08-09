/* eslint no-use-before-define: "off" */
import { useMemo } from 'react';

import { Registry } from './types/entries';
import { IContext, ApiContext } from './contex';
import CresteRegistry from './registry';
import useUniqueId from './unique-id';

export const DndProvider = ({ children }) => {
  const contextId = String(useUniqueId('esd-provider'));
  const registry: Registry = useMemo(CresteRegistry, []);

  const appContext: IContext = useMemo(
    () => ({ contextId, registry }),
    [contextId, registry],
  );

  return (
    <ApiContext.Provider value={appContext}>{children}</ApiContext.Provider>
  );
};
