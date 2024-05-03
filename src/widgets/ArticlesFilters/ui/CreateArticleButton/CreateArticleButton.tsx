import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/redesigned/Button';
import { isUserAdmin } from '@/entities/User';
import { getRouteArticleCreate } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';

interface CreateArticleButtonProps {
    className?: string;
}

export const CreateArticleButton = memo((props: CreateArticleButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const isAdmin = useSelector(isUserAdmin);

    const onCreateNewArticle = useCallback(() => {
        navigate(getRouteArticleCreate());
    }, [navigate]);

    if (!isAdmin) {
        return null;
    }

    return (
        isAdmin && (
            <Button
                className={classNames('', {}, [className])}
                onClick={onCreateNewArticle}
            >
                {t('Создать статью')}
            </Button>
        )
    );
});
