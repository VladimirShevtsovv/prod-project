import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ValidateNewArticleError } from '../../consts/consts';
import { validateNewArticleData } from '../validateNewArticleData/validateNewArticleData';
import { getCreateNewArticlePageData } from '../../selectors/createNewArticlePageSelectors';
import { Article } from '@/entities/Article';
import { getFormattedDate } from '../createNewArticle/createNewArticle';
import { getUserAuthData } from '@/entities/User';

export const updateArticleData = createAsyncThunk<
    Article,
    void,
    ThunkConfig<ValidateNewArticleError[]>
>('article/updateArticleData', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const user = getUserAuthData(getState());
    const newArticleData = getCreateNewArticlePageData(getState());

    const errors = await validateNewArticleData(newArticleData);
    if (errors.length) return rejectWithValue(errors);

    try {
        console.log(newArticleData, errors);
        const response = await extra.api.put<Article>(
            `/articles/${newArticleData?.id}`,
            // newArticleData,
            {
                title: newArticleData?.title,
                subtitle: newArticleData?.subtitle,
                img: newArticleData?.img,
                views: newArticleData?.views,
                createdAt: getFormattedDate(),
                userId: user?.id,
                type: [newArticleData?.type],
                blocks: newArticleData?.blocks,
            },
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue([ValidateNewArticleError.SERVER_ERROR_SAVE]);
    }
});
