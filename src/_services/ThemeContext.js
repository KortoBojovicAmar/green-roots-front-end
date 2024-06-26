import React, { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const initialTheme = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};