import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import { Page } from '@/widgets/Page';

const AboutPage = memo(() => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('О сайте')}
            <RatingCard />
        </Page>
    );
});

export default AboutPage;
