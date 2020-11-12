import React, { createContext, useState } from 'react';

interface ContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
} 

export const Context = createContext<ContextProps>({} as ContextProps);

const ContextProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <Context.Provider value={{ count, setCount }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider