import React, { createContext } from 'react';
import useCurrentId from '../hooks/useCurrentId';

export const NextPostIdContext = createContext();
export const LoginIdContext = createContext();

export const ContextProvider = ({ children }) => {
   
  const currentPostId = useCurrentId(`http://localhost:3002/posts`);
  const nextPostId = currentPostId+1;

  const currentLoginId = useCurrentId(`http://localhost:3002/users`);
  const nextLoginId = currentLoginId+1;

  return (
    <NextPostIdContext.Provider value={nextPostId}>
      <LoginIdContext.Provider value={nextLoginId}>
        {children}
      </LoginIdContext.Provider>
    </NextPostIdContext.Provider>
  );
};