import { I18nextProvider } from 'react-i18next';
import React, { ReactNode } from 'react';
import i18nextForTest from 'shared/config/i18n/i18nextForTest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface ComponentRenderOptions {
    route?: string;
    initialState?:DeepPartial<StateSchema>
}
export function ComponentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nextForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
        ,
    );
}
