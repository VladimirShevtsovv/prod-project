import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';

interface NewArticleTypeSelectorProps {
    className?: string;
    onChange?: (type: ArticleType) => void;
    value?: ArticleType;
}

export const CreateNewArticleSelector = memo(
    (props: NewArticleTypeSelectorProps) => {
        const { className, onChange, value = ArticleType.ALL } = props;
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as ArticleType);
            },
            [onChange],
        );

        const articleTypes = useMemo<TabItem[]>(
            () => [
                {
                    value: ArticleType.ALL,
                    content: t('Все статьи'),
                },
                {
                    value: ArticleType.IT,
                    content: t('Айти'),
                },
                {
                    value: ArticleType.ECONOMICS,
                    content: t('Экономика'),
                },
                {
                    value: ArticleType.SCIENCE,
                    content: t('Наука'),
                },
            ],
            [t],
        );

        return (
            <HStack>
                <Text text={t('Тема статьи')} />
                <ListBox
                    direction="top right"
                    onChange={onChangeHandler}
                    items={articleTypes}
                    value={value}
                    className={className}
                />
            </HStack>
        );
    },
);
