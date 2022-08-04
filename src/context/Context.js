import React, { createContext, useState } from 'react';
import useCurrentId from '../hooks/useCurrentId';

export const NextPostIdContext = createContext();
export const LoginIdContext = createContext();
export const IsLoginContext = createContext();

export const ContextProvider = ({ children }) => {
   
  const currentPostId = useCurrentId(`http://localhost:3002/posts`);
  const nextPostId = currentPostId+1;

  const currentLoginId = useCurrentId(`http://localhost:3002/users`);
  const nextLoginId = currentLoginId+1;

  const [isLogin, setIsLogin] = useState(false);

  return (
    <IsLoginContext.Provider value={{isLogin, setIsLogin}}>
      <NextPostIdContext.Provider value={nextPostId}>
        <LoginIdContext.Provider value={nextLoginId}>
          {children}
        </LoginIdContext.Provider>
      </NextPostIdContext.Provider>
    </IsLoginContext.Provider>
  );
};