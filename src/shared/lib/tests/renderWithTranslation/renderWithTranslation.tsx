import { I18nextProvider } from 'react-i18next';
import React, { ReactNode } from 'react';
import i18nextForTest from 'shared/config/i18n/i18nextForTest';
import { render } from '@testing-library/react';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nextForTest}>
            {component}
        </I18nextProvider>,
    );
}
