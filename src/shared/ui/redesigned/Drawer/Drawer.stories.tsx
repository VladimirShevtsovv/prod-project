import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Drawer } from './Drawer';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';
import { Text } from '../Text';
import cls from './Drawer.module.scss';

export default {
    title: 'shared/redesigned/DrawerRedesigned',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="test" text="text text" />,
    isOpen: true,
    className: cls.openedStorybook,
};
export const NormalDark = Template.bind({});
NormalDark.args = {
    children: <Text title="test" text="text text" />,
    isOpen: true,
    className: cls.openedStorybook,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
