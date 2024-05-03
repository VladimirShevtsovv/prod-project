import { useTranslation } from 'react-i18next';
import React, { InputHTMLAttributes, memo, useRef, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Textarea.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLTextAreaProps = Omit<
    InputHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange' | 'size'
>;

type TextAreaSize = 's' | 'm' | 'l';
interface TextareaProps extends HTMLTextAreaProps {
    className?: string;
    size?: TextAreaSize;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
}

export const Textarea = memo((props: TextareaProps) => {
    const {
        className,
        size = 'm',
        value,
        label,
        onChange,
        placeholder,
        ...otherProps
    } = props;
    const { t } = useTranslation();
    const ref = useRef<HTMLTextAreaElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };
    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const mods: Mods = {
        [cls.focused]: isFocused,
    };

    const textArea = (
        <div
            className={classNames(cls.TextareaWrapper, mods, [
                className,
                cls[size],
            ])}
        >
            <textarea
                ref={ref}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                {...otherProps}
            />
        </div>
    );

    if (label) {
        return (
            <HStack max gap="8">
                <Text text={label} />
                {textArea}
            </HStack>
        );
    }

    return textArea;
});
