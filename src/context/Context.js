import React, { createContext } from 'react';
import useCurrentId from '../hooks/useCurrentId';

export const NextPostIdContext = createContext();
export const LoginIdContenxt = createContext();

export const ContextProvider = ({ children }) => {
   
  const currentPostId = useCurrentId(`http://localhost:3002/posts`);
  const nextPostId = currentPostId+1;

  const currentLoginId = useCurrentId(`http://localhost:3002/onLogin`);
  const nextLoginId = currentLoginId+1;

  return (
    <NextPostIdContext.Provider value={nextPostId}>
      <LoginIdContenxt.Provider value={nextLoginId}>
        {children}
      </LoginIdContenxt.Provider>
    </NextPostIdContext.Provider>
  );
};