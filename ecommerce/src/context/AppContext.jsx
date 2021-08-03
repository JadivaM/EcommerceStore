import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };