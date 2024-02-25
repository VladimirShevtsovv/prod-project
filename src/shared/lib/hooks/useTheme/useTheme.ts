import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '@/shared/consts/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../../consts/localStorage';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme,
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.WHEAT;
            break;
        case Theme.WHEAT:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    if (theme) {
        document.body.className = theme;
    }

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
