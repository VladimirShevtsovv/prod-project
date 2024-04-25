import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'shared/redesigned/ButtonRedesigned',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    variant: 'outline',
};

export const OutlinedL = Template.bind({});
OutlinedL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'l',
};

export const OutlinedXL = Template.bind({});
OutlinedXL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'xl',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    variant: 'outline',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    variant: 'filled',
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    variant: 'filled',
    square: true,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    variant: 'filled',
    square: true,
    size: 'm',
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    variant: 'filled',
    square: true,
    size: 'l',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    variant: 'filled',
    square: true,
    size: 'xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    variant: 'filled',
    disabled: true,
};
