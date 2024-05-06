import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleNewTextBlockComponent } from './ArticleNewTextBlockComponent';

export default {
    title: 'widgets/ArticleNewTextBlockComponent',
    component: ArticleNewTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleNewTextBlockComponent>;

const Template: ComponentStory<typeof ArticleNewTextBlockComponent> = (
    args,
) => <ArticleNewTextBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {};
