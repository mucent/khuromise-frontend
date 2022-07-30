import React, { createContext, useRef } from 'react';

export const NextIdContext = createContext();

export const ContextProvider = ({ children }) => {
  const nextId = useRef(1);
  return (
    <NextIdContext.Provider value={nextId}>
      {children}
    </NextIdContext.Provider>
  );
};