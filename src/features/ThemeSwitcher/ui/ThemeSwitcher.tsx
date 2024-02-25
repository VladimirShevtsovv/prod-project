import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import DarkIcon from '@/shared/assetes/icons/theme-dark.svg';
import LightIcon from '@/shared/assetes/icons/theme-light.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/consts/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
