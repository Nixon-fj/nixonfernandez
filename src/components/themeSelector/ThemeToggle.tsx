import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Oscuro' : 'Claro'}
        </button>
    );
};

export default ThemeToggle;
