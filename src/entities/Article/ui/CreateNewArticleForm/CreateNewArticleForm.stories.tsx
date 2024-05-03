import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateNewArticleForm } from './CreateNewArticleForm';

export default {
    title: 'features/CreateNewArticleForm',
    component: CreateNewArticleForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CreateNewArticleForm>;

const Template: ComponentStory<typeof CreateNewArticleForm> = (args) => (
    <CreateNewArticleForm {...args} />
);

export const Light = Template.bind({});
Light.args = {};
