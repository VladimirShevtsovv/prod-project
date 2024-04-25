import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../../redesigned/Text/Text';
import { Card } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'shared/redesigned/CardRedesigned',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="test" text="text text" />,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    children: <Text title="test" text="text text" />,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BorderRound = Template.bind({});
BorderRound.args = {
    children: <Text title="test" text="text text" />,
    border: 'round',
};

export const BorderPartial = Template.bind({});
BorderPartial.args = {
    children: <Text title="test" text="text text" />,
    border: 'partial',
};

export const Padding0 = Template.bind({});
Padding0.args = {
    children: <Text title="test" text="text text" />,
    padding: '0',
};

export const Padding16 = Template.bind({});
Padding16.args = {
    children: <Text title="test" text="text text" />,
    padding: '16',
};

export const Padding24 = Template.bind({});
Padding24.args = {
    children: <Text title="test" text="text text" />,
    padding: '24',
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: <Text title="test" text="text text" />,
    variant: 'outlined',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: <Text title="test" text="text text" />,
    variant: 'outlined',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = Template.bind({});
Light.args = {
    children: <Text title="test" text="text text" />,
    variant: 'light',
};
