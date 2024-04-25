import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './Icon';
import ListIcon from '@/shared/assetes/icons/burger.svg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'shared/redesigned/IconRedesigned',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    Svg: ListIcon,
};

export const DefaultClickable = Template.bind({});
DefaultClickable.args = {
    Svg: ListIcon,
    clickable: true,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    Svg: ListIcon,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
