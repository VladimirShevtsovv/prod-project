import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import HomePage from './HomePage';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'pages/HomePage',
    component: HomePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
