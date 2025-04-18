// src/context/ThemeContext.jsx
import React, { createContext, useContext } from 'react';

const theme = {
  colors: {
    primary: "#88D8D8",       // Pearl Aqua
    primaryLight: "#B8E6E6",  // Lighter Pearl Aqua
    primaryDark: "#5AC8C8",   // Darker Pearl Aqua
    white: "#FFFFFF",
    light: "#F8F9FA",
    dark: "#212529",
    text: "#333333",
    textLight: "#6C757D"
  },
  gradients: {
    aquaGradient: "linear-gradient(135deg,rgb(33, 124, 124) 0%,rgb(52, 149, 149) 100%)",
    lightGradient: "linear-gradient(135deg,rgb(106, 142, 178) 0%, #FFFFFF 100%)"
  },
  shadows: {
    soft: "0 4px 20px rgba(34, 138, 138, 0.15)",
    medium: "0 8px 30px rgba(40, 135, 135, 0.2)"
  }
};

const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);