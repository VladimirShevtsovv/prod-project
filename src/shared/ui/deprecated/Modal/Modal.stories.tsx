import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children:
        'Товарищи! дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения. Товарищи! дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'Товарищи! дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения. Товарищи! дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
