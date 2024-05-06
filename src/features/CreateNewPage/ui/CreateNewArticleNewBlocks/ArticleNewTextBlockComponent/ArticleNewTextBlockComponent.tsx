import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/redesigned/Input';
import { Textarea } from '@/shared/ui/redesigned/Textarea/Textarea';
import { ArticleTextBlock } from '@/entities/Article';
import { Flex } from '@/shared/ui/redesigned/Stack/Flex/Flex';
import { createNewArticleActions } from '../../../model/slice/CreteNewArticlePageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface ArticleNewTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleNewTextBlockComponent = memo(
    (props: ArticleNewTextBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();
        const dispatch = useAppDispatch();

        const onChangeTitle = useCallback(
            (value?: string) => {
                dispatch(
                    createNewArticleActions.updateNewArticleBlocksData({
                        ...block,
                        title: value || '',
                    }),
                );
            },
            [block, dispatch],
        );

        const onChangeParagraphs = useCallback(
            (value?: string) => {
                dispatch(
                    createNewArticleActions.updateNewArticleBlocksData({
                        ...block,
                        paragraphs: [value || ''],
                    }),
                );
            },
            [block, dispatch],
        );

        const onBlur = useCallback(
            (value?: string) => {
                dispatch(
                    createNewArticleActions.updateNewArticleBlocksData({
                        ...block,
                        paragraphs: value
                            ? value
                                  .split(/\r?\n/)
                                  .filter((value) => value.trim().length)
                            : [],
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
                <Input onChange={onChangeTitle} value={block.title} />
                <Textarea
                    onBlurHandler={onBlur}
                    onChange={onChangeParagraphs}
                    size="l"
                    value={block.paragraphs.join(`\n`)}
                />
            </Flex>
        );
    },
);
