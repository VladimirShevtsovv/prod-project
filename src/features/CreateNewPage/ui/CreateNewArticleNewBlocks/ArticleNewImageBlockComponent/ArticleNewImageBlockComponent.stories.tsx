import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleNewImageBlockComponent } from './ArticleNewImageBlockComponent';

export default {
    title: 'widgets/ArticleNewImageBlockComponent',
    component: ArticleNewImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleNewImageBlockComponent>;

const Template: ComponentStory<typeof ArticleNewImageBlockComponent> = (
    args,
) => <ArticleNewImageBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {};
