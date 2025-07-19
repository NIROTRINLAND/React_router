// src/context/ThemeContext.jsx
import { createContext, useState, useEffect } from "react";
import { themes } from "../themes";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("light");

  const toggleTheme = () => {
    const themeNames = Object.keys(themes);
    const currentIndex = themeNames.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themeNames.length;
    setThemeName(themeNames[nextIndex]);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThemeName(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
}
