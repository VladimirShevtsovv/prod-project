import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleImageBlock } from '@/entities/Article';
import { Flex } from '@/shared/ui/redesigned/Stack/Flex/Flex';
import { createNewArticleActions } from '../../../model/slice/CreteNewArticlePageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface ArticleNewImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleNewImageBlockComponent = memo(
    (props: ArticleNewImageBlockComponentProps) => {
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

        const onChangeSrc = useCallback(
            (value?: string) => {
                dispatch(
                    createNewArticleActions.updateNewArticleBlocksData({
                        ...block,
                        src: value || '',
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
                <Input onChange={onChangeSrc} value={block.src} />
            </Flex>
        );
    },
);
