import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './Icon';
import ListIcon from '@/shared/assetes/icons/burger.svg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'shared/deprecated/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    Svg: ListIcon,
};

export const InvertedDark = Template.bind({});
InvertedDark.args = {
    Svg: ListIcon,
    inverted: true,
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
export const DefaultDark = Template.bind({});
DefaultDark.args = {
    Svg: ListIcon,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
