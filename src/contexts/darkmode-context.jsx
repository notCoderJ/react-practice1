import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context) {
    return new Error('Not Found DarkModeContext!');
  }

  return context;
}

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
    toggleTheme();
  };

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function toggleTheme() {
  if (localStorage.theme === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  document.documentElement.classList.toggle('dark');
}
