import { useState } from 'react';

import { AppContext } from './dnd-context';

export const DndProvider = ({ children }) => {
  const [entries, setEntry] = useState({});

  const register = entry => {
    setEntry({ ...entries, [entry]: 'teste' });
  };

  return (
    <AppContext.Provider value={{ entries, register }}>
      {children}
    </AppContext.Provider>
  );
};
