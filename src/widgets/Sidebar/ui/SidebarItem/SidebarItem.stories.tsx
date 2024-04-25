import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { SidebarItem } from './SidebarItem';
import { Theme } from '@/shared/consts/theme';
import MainIcon from '@/shared/assetes/icons/home.svg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'widgets/SidebarItem',
    component: SidebarItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => (
    <SidebarItem {...args} />
);

export const Light = Template.bind({});
Light.args = {
    item: {
        path: '/',
        Icon: MainIcon,
        text: 'Главная',
    },
};
Light.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const LightRedesigned = Template.bind({});
LightRedesigned.args = {
    item: {
        path: '/',
        Icon: MainIcon,
        text: 'Главная',
    },
};
LightRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const Collapsed = Template.bind({});
Collapsed.args = {
    item: {
        path: '/',
        Icon: MainIcon,
        text: 'Главная',
    },
    collapsed: true,
};
Collapsed.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];
export const Dark = Template.bind({});
Dark.args = {
    item: {
        path: '/',
        Icon: MainIcon,
        text: 'Главная',
    },
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: {} },
    }),
];
