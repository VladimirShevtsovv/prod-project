import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleBlock, CreateNewArticle } from '../../model/types/article';
import { ArticleBlockType, ArticleType } from '../../model/consts/consts';
import { CreateNewArticleSelector } from '../CreateNewArticleSelector/CreateNewArticleSelector';
import { CreateNewBlockTabsSelector } from '../CreateNewBlockTabsSelector/CreateNewBlockTabsSelector';

interface CreateNewArticleFormProps {
    data?: CreateNewArticle;
    className?: string;
    onChangeArticleTitle?: (value?: string) => void;
    onChangeArticleSubtitle?: (value?: string) => void;
    onChangeArticleImageUrl?: (value?: string) => void;
    onChangeArticleType?: (value: ArticleType) => void;
    onChangeNewBlockType: (value: ArticleBlockType) => void;
    onCreateNewBlock: (data: ArticleBlock[]) => void;
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
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            <Input
                label={t('Название статьи')}
                onChange={onChangeArticleTitle}
            />
            <Input
                label={t('Подзаголовок статьи')}
                onChange={onChangeArticleSubtitle}
            />
            <Input
                label={t('Основная картинка статьи (URL)')}
                onChange={onChangeArticleImageUrl}
            />
            <CreateNewArticleSelector
                value={data?.typeOfNewArticle}
                onChange={onChangeArticleType}
            />
            <CreateNewBlockTabsSelector
                blocks={data?.newBlocks}
                value={data?.newBlockType}
                onCreate={onCreateNewBlock}
                onChange={onChangeNewBlockType}
            />
            {/* <Textarea size="l" label={t('Описание статьи')} /> */}
        </div>
    );
});
