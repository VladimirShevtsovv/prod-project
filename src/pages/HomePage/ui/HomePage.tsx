import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const HomePage = memo(() => {
    const { t } = useTranslation('home');

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
});

export default HomePage;
