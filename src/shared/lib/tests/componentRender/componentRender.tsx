import { I18nextProvider } from 'react-i18next';
import React, { ReactNode } from 'react';
import i18nextForTest from 'shared/config/i18n/i18nextForTest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export interface ComponentRenderOptions {
    route?: string;
}
export function ComponentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = '/',
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nextForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
