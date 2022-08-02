import React, { createContext, useRef } from 'react';
import useCurrentId from '../hooks/useCurrentId';

export const NextIdContext = createContext();

export const ContextProvider = ({ children }) => {
  const currentPostId = useCurrentId(`http://localhost:3002/posts`);
  const nextPostId = currentPostId+1;
  return (
    <NextIdContext.Provider value={nextPostId}>
      {children}
    </NextIdContext.Provider>
  );
};