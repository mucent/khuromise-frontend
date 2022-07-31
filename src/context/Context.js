import React, { createContext, useRef } from 'react';
import useCurrentId from '../hooks/useCurrentId';

export const NextIdContext = createContext();

export const ContextProvider = ({ children }) => {
  const currentId = useCurrentId();
  const nextId = useRef(currentId + 1);
  return (
    <NextIdContext.Provider value={nextId}>
      {children}
    </NextIdContext.Provider>
  );
};