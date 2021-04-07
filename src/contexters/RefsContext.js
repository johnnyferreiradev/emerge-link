import React, { useState, useRef } from 'react';

export const RefsContext = React.createContext();

export const Context = ({ children }) => {
  const [state] = useState({
    plans: useRef(null),
    contact: useRef(null),
    aboutUs: useRef(null),
  });

  return (
    <RefsContext.Provider value={state}>
      {children}
    </RefsContext.Provider>
  );
};

export default Context;
