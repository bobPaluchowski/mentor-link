import React, { createContext, useContext, useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
  setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

return (
<ThemeContext.Provider value={{ mode, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
};

export const useTheme = () => useContext(ThemeContext);

