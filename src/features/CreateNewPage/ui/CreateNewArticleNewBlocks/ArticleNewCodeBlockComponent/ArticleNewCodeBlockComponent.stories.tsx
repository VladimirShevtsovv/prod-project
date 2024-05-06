import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleNewCodeBlockComponent } from './ArticleNewCodeBlockComponent';

export default {
    title: 'widgets/ArticleNewCodeBlockComponent',
    component: ArticleNewCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleNewCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleNewCodeBlockComponent> = (
    args,
) => <ArticleNewCodeBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {};
