import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    createNewArticleActions,
    createNewArticleReducer,
} from '../model/slice/CreteNewArticlePageSlice';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    ArticleBlock,
    ArticleBlockType,
    ArticleType,
    CreateNewArticleForm,
} from '@/entities/Article';
import { getCreateNewArticlePageData } from '../model/selectors/createNewArticlePageSelectors';

interface CreteNewArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    createNewArticlePage: createNewArticleReducer,
};

export const CreteNewArticlePage = memo((props: CreteNewArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const createNewArticleData = useSelector(getCreateNewArticlePageData);

    const onChangeArticleTitle = useCallback(
        (value?: string) => {
            dispatch(
                createNewArticleActions.updateNewArticleData({
                    title: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeArticleSubtitle = useCallback(
        (value?: string) => {
            dispatch(
                createNewArticleActions.updateNewArticleData({
                    subtitle: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeArticleImageUrl = useCallback(
        (value?: string) => {
            dispatch(
                createNewArticleActions.updateNewArticleData({
                    img: value || '',
                }),
            );
        },
        [dispatch],
    );

    const changeNewArticleType = useCallback(
        (newType: ArticleType) => {
            dispatch(
                createNewArticleActions.updateNewArticleData({
                    typeOfNewArticle: newType,
                }),
            );
        },
        [dispatch],
    );

    const onChangeNewBlockType = useCallback(
        (value: ArticleBlockType) => {
            dispatch(
                createNewArticleActions.updateNewArticleData({
                    newBlockType: value,
                }),
            );
        },
        [dispatch],
    );

    const createNewBlockHandler = useCallback(
        (data: ArticleBlock[]) => {
            dispatch(
                createNewArticleActions.updateNewArticleData({
                    newBlocks: data,
                }),
            );
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack className={classNames('', {}, [className])}>
                {t('Создание новой статьи')}
                <CreateNewArticleForm
                    data={createNewArticleData}
                    onChangeArticleTitle={onChangeArticleTitle}
                    onChangeArticleImageUrl={onChangeArticleImageUrl}
                    onChangeArticleSubtitle={onChangeArticleSubtitle}
                    onChangeArticleType={changeNewArticleType}
                    onChangeNewBlockType={onChangeNewBlockType}
                    onCreateNewBlock={createNewBlockHandler}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
