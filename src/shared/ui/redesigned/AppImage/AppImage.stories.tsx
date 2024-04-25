import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppImage } from './AppImage';

export default {
    title: 'shared/redesigned/AppImageRedesigned',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        src: 'https://cdn-icons-png.flaticon.com/512/5024/5024158.png',
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
    <AppImage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
