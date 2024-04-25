import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/consts/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import cls from './Sidebar.module.scss';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
    StoreDecorator({
        user: {},
    }),
];

export const DefaultRedesigned = Template.bind({});
DefaultRedesigned.args = {
    className: cls.SidebarRedesigned,
};
DefaultRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    ThemeDecorator(Theme.DARK),
    NewDesignDecorator,
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const NoAuthRedesigned = Template.bind({});
NoAuthRedesigned.args = {};
NoAuthRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        user: {},
    }),
];
