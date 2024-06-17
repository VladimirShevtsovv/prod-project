import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
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
    fetchArticleById,
} from '@/entities/Article';
import {
    getCreateNewArticlePageData,
    getCreateNewArticlePageValidateErrors,
} from '../model/selectors/createNewArticlePageSelectors';
import { CreateNewArticleForm } from './CreateNewArticleForm/CreateNewArticleForm';

import { Text } from '@/shared/ui/redesigned/Text';
import { createNewArticle } from '../model/services/createNewArticle/createNewArticle';
import { ValidateNewArticleError } from '../model/consts/consts';
import { updateArticleData } from '../model/services/updateArticleData/updateArticleData';

interface CreteNewArticlePageProps {
    className?: string;
    type: string;
    id?: string;
}

const reducers: ReducersList = {
    createNewArticlePage: createNewArticleReducer,
};

export const CreteNewArticlePage = memo((props: CreteNewArticlePageProps) => {
    const { className, type, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const createNewArticleData = useSelector(getCreateNewArticlePageData);
    const validateErrors = useSelector(getCreateNewArticlePageValidateErrors);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && type === 'edit') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id, type]);

    const validateErrorTranslates = {
        [ValidateNewArticleError.SERVER_ERROR_SAVE]: t(
            'Серверная ошибка при сохранении',
        ),
        [ValidateNewArticleError.SERVER_ERROR_GET]: t(
            'Серверная ошибка при получении данных',
        ),
        [ValidateNewArticleError.NO_DATA]: t('Данные не указаны'),
        [ValidateNewArticleError.INCORRECT_TITLE]: t('Некорректный заголовок'),
        [ValidateNewArticleError.INCORRECT_SUBTITLE]: t(
            'Некорректный подзаголовок',
        ),
        [ValidateNewArticleError.INCORRECT_IMG_URL_EMPTY]: t(
            'Не введен url основной картинки',
        ),
        [ValidateNewArticleError.INCORRECT_IMG_URL_INVALID]: t(
            'Введен url несущесвующей или недоступной картинки',
        ),
        [ValidateNewArticleError.INCORRECT_NEW_BLOCKS_LENGTH]: t(
            'Добавьте хотя бы один дополнительный блок',
        ),
        [ValidateNewArticleError.INCORRECT_NEW_TEXT_BLOCK]: t(
            'Не все дополниетльные тектовые блоки заполенны',
        ),
        [ValidateNewArticleError.INCORRECT_NEW_CODE_BLOCK]: t(
            'Не все дополниетльные блоки с кодом заполенны',
        ),
        [ValidateNewArticleError.INCORRECT_NEW_IMAGE_BLOCK_TITLE]: t(
            'Не во всех дополниетльных блоках-картинках заполенны заголовки',
        ),
        [ValidateNewArticleError.INCORRECT_IMG_URL_SRC_EMPTY]: t(
            'Не во всех дополниетльных блоках-картинках заполенны url на картинку',
        ),
        [ValidateNewArticleError.INCORRECT_IMG_URL_SRC_INVALID]: t(
            'В одном из дополнительных блоках-картинках введен невалидный url',
        ),
    };

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

    const onAddTypeOfArticleSelector = useCallback(() => {
        const { type, typeOfNewArticle } = createNewArticleData || {};

        let newType: ArticleType[];

        if (type && typeOfNewArticle) {
            newType = type.includes(typeOfNewArticle)
                ? [...type]
                : [...type, typeOfNewArticle];
        } else {
            newType = [ArticleType.ALL];
        }

        dispatch(
            createNewArticleActions.updateNewArticleData({
                type: newType,
            }),
        );
    }, [createNewArticleData, dispatch]);

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
                    blocks: data,
                }),
            );
        },
        [dispatch],
    );

    const onSaveNewArticle = useCallback(() => {
        if (type === 'edit') {
            dispatch(updateArticleData());
        } else {
            dispatch(createNewArticle());
        }
    }, [dispatch, type]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack className={classNames('', {}, [className])}>
                {t('Создание новой статьи')}
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <Text
                            key={err}
                            variant="error"
                            text={validateErrorTranslates[err]}
                        />
                    ))}
                <CreateNewArticleForm
                    data={createNewArticleData}
                    onChangeArticleTitle={onChangeArticleTitle}
                    onChangeArticleImageUrl={onChangeArticleImageUrl}
                    onChangeArticleSubtitle={onChangeArticleSubtitle}
                    onChangeArticleType={changeNewArticleType}
                    onChangeNewBlockType={onChangeNewBlockType}
                    onCreateNewBlock={createNewBlockHandler}
                    onSaveNewArticle={onSaveNewArticle}
                    onAddTypeOfArticleSelector={onAddTypeOfArticleSelector}
                    pageType={type}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
