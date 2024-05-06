import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/redesigned/Input';

import { CreateNewArticleSelector } from '../CreateNewArticleSelector/CreateNewArticleSelector';
import { CreateNewBlockTabsSelector } from '../CreateNewBlockTabsSelector/CreateNewBlockTabsSelector';
import {
    ArticleBlock,
    ArticleBlockType,
    ArticleType,
    CreateNewArticle,
} from '@/entities/Article';
import { Button } from '@/shared/ui/redesigned/Button';

interface CreateNewArticleFormProps {
    data?: CreateNewArticle;
    className?: string;
    onChangeArticleTitle?: (value?: string) => void;
    onChangeArticleSubtitle?: (value?: string) => void;
    onChangeArticleImageUrl?: (value?: string) => void;
    onChangeArticleType?: (value: ArticleType) => void;
    onChangeNewBlockType: (value: ArticleBlockType) => void;
    onCreateNewBlock: (data: ArticleBlock[]) => void;
    onSaveNewArticle?: () => void;
}

export const CreateNewArticleForm = memo((props: CreateNewArticleFormProps) => {
    const {
        data,
        className,
        onChangeArticleTitle,
        onChangeArticleSubtitle,
        onChangeArticleImageUrl,
        onChangeArticleType,
        onChangeNewBlockType,
        onCreateNewBlock,
        onSaveNewArticle,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            <Input
                label={t('Название статьи')}
                onChange={onChangeArticleTitle}
                value={data?.title || ''}
            />
            <Input
                label={t('Подзаголовок статьи')}
                onChange={onChangeArticleSubtitle}
                value={data?.subtitle || ''}
            />
            <Input
                label={t('Основная картинка статьи (URL)')}
                onChange={onChangeArticleImageUrl}
                value={data?.img || ''}
            />
            <CreateNewArticleSelector
                value={data?.typeOfNewArticle}
                onChange={onChangeArticleType}
            />
            <CreateNewBlockTabsSelector
                blocks={data?.newBlocks}
                newBlockType={data?.newBlockType}
                onCreate={onCreateNewBlock}
                onChange={onChangeNewBlockType}
            />
            <Button onClick={onSaveNewArticle}>
                {t('Создать новую статью')}
            </Button>
        </div>
    );
});
