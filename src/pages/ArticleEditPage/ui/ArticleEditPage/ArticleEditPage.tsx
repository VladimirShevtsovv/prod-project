import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { Page } from '@/widgets/Page';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { CreteNewArticlePage } from '@/features/CreateNewPage';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <StickyContentLayout
            content={
                <Page
                    className={classNames(cls.ArticleEditPage, {}, [className])}
                >
                    {isEdit ? (
                        t('Редактирование статьи с ID = ') + id
                    ) : (
                        <CreteNewArticlePage />
                    )}
                </Page>
            }
        />
    );
});

export default ArticleEditPage;
