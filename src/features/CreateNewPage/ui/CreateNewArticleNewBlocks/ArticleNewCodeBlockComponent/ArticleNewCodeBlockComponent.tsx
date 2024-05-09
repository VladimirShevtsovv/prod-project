import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Textarea } from '@/shared/ui/redesigned/Textarea/Textarea';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ArticleCodeBlock } from '@/entities/Article';
import { createNewArticleActions } from '../../../model/slice/CreteNewArticlePageSlice';
import { Flex } from '@/shared/ui/redesigned/Stack/Flex/Flex';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleNewCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleNewCodeBlockComponent = memo(
    (props: ArticleNewCodeBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();
        const dispatch = useAppDispatch();

        const onChangeCode = useCallback(
            (value?: string) => {
                dispatch(
                    createNewArticleActions.updateNewArticleBlocksData({
                        ...block,
                        code: value || '',
                    }),
                );
            },
            [block, dispatch],
        );

        return (
            <Flex
                direction="column"
                max
                className={classNames('', {}, [className])}
            >
                <Text text={t('Дполниельный блок с кодом')} />
                <Textarea
                    size="xl"
                    onChange={onChangeCode}
                    value={block.code}
                />
            </Flex>
        );
    },
);
