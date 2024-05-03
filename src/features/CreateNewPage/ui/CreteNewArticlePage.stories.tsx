import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreteNewArticlePage } from './CreteNewArticlePage';

export default {
    title: 'widgets/CreteNewArticlePage',
    component: CreteNewArticlePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CreteNewArticlePage>;

const Template: ComponentStory<typeof CreteNewArticlePage> = (args) => <CreteNewArticlePage {...args} />;

export const Light = Template.bind({});
Light.args = {};


