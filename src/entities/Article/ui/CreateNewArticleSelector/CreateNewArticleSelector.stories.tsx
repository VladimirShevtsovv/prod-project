import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateNewArticleSelector } from './CreateNewArticleSelector';

export default {
    title: 'widgets/CreateNewArticleSelector',
    component: CreateNewArticleSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CreateNewArticleSelector>;

const Template: ComponentStory<typeof CreateNewArticleSelector> = (args) => <CreateNewArticleSelector {...args} />;

export const Light = Template.bind({});
Light.args = {};


