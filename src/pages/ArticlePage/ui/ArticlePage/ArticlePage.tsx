import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage = memo(({ className }: ArticlePageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            <div />
        </div>
    );
});

export default ArticlePage;
