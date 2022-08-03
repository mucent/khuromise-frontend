import React, { createContext } from 'react';
import useCurrentId from '../hooks/useCurrentId';

export const NextPostIdContext = createContext();

export const ContextProvider = ({ children }) => {
  const currentPostId = useCurrentId(`http://localhost:3002/posts`);
  const nextPostId = currentPostId+1;
  return (
    <NextPostIdContext.Provider value={nextPostId}>
      {children}
    </NextPostIdContext.Provider>
  );
};