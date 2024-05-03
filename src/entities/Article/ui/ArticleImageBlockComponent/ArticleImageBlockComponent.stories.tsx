import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType } from '../../model/consts/consts';
import {
    ArticleImageBlockComponent,
    ArticleImageBlockComponentProps,
} from './ArticleImageBlockComponent';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/ArticleBlocks/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => (
    <ArticleImageBlockComponent {...args} />
);

const args: ArticleImageBlockComponentProps = {
    block: {
        id: '1',
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
    },
};

export const Normal = Template.bind({});
Normal.args = args;
Normal.decorators = [StoreDecorator({})];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = args;
NormalRedesigned.decorators = [StoreDecorator({}), NewDesignDecorator];
