import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType } from '../../model/consts/consts';
import {
    ArticleCodeBlockComponent,
    ArticleCodeBlockComponentProps,
} from './ArticleCodeBlockComponent';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/ArticleBlocks/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => (
    <ArticleCodeBlockComponent {...args} />
);

const args: ArticleCodeBlockComponentProps = {
    block: {
        id: '1',
        type: ArticleBlockType.CODE,
        // eslint-disable-next-line max-len
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
};

export const Normal = Template.bind({});
Normal.args = args;
Normal.decorators = [StoreDecorator({})];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = args;
NormalRedesigned.decorators = [StoreDecorator({}), NewDesignDecorator];
