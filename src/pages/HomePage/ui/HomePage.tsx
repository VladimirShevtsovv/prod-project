import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = memo(() => {
    const { t } = useTranslation('home');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
});

export default HomePage;
