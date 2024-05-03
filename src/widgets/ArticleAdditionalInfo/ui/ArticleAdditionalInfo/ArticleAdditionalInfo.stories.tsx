import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {
    ArticleAdditionalInfo,
    ArticleAdditionalInfoProps,
} from './ArticleAdditionalInfo';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { I18Decorator } from '@/shared/config/storybook/I18Decorator/I18Decorator';
import { Card } from '@/shared/ui/redesigned/Card';

export default {
    title: 'widgets/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args) => (
    <Card padding="24" border="partial">
        <ArticleAdditionalInfo {...args} />
    </Card>
);

const args: ArticleAdditionalInfoProps = {
    author: {
        id: '123',
        username: 'test',
        avatar: 'https://cdn-icons-png.flaticon.com/512/838/838416.png',
    },
    createdAt: '12.12.2012',
    views: 100,
    onEdit: () => {},
};

export const Default = Template.bind({});
Default.args = args;
Default.decorators = [StoreDecorator({}), I18Decorator];
