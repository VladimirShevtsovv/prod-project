import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'shared/redesigned/InputRedesigned',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Text',
    value: '123123',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    placeholder: 'Text',
    value: '123123',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryWithLabel = Template.bind({});
PrimaryWithLabel.args = {
    placeholder: 'Text',
    value: '123123',
    label: 'label',
};

export const PrimaryS = Template.bind({});
PrimaryS.args = {
    placeholder: 'Text',
    value: '123123',
    size: 's',
};
export const PrimaryL = Template.bind({});
PrimaryL.args = {
    placeholder: 'Text',
    value: '123123',
    size: 'l',
};
