import React, { createContext, useState, useEffect } from 'react';
import { DEFAULT_THEME } from '../constants/config';

export const ThemeContext = createContext();

const lightTheme = {
  backgroundColor: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  backgroundColor: '#000000',
  color: '#ffffff',
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(DEFAULT_THEME);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setThemeMode(savedTheme);
    const initialTheme = savedTheme === 'dark' ? darkTheme : lightTheme;
    document.body.style.backgroundColor = initialTheme.backgroundColor;
    document.body.style.color = initialTheme.color;
  }, []);

  const toggleTheme = () => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
    const newTheme = newThemeMode === 'dark' ? darkTheme : lightTheme;
    document.body.style.backgroundColor = newTheme.backgroundColor;
    document.body.style.color = newTheme.color;
    localStorage.setItem('theme',newThemeMode);
  };

  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
