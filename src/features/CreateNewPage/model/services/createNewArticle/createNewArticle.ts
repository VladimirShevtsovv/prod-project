import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ValidateNewArticleError } from '../../consts/consts';
import { getCreateNewArticlePageData } from '../../selectors/createNewArticlePageSelectors';
import { validateNewArticleData } from '../validateNewArticleData/validateNewArticleData';
import { Article } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';

export function getFormattedDate(): string {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
}
export const createNewArticle = createAsyncThunk<
    Article,
    void,
    ThunkConfig<ValidateNewArticleError[]>
>('article/updateProfileData', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const user = getUserAuthData(getState());
    const newArticleData = getCreateNewArticlePageData(getState());

    const errors = await validateNewArticleData(newArticleData);
    if (errors.length) return rejectWithValue(errors);

    try {
        const response = await extra.api.post<Article>(`/articles`, {
            title: newArticleData?.title,
            subtitle: newArticleData?.subtitle,
            img: newArticleData?.img,
            views: 0,
            createdAt: getFormattedDate(),
            userId: user?.id,
            type: [newArticleData?.type],
            blocks: newArticleData?.blocks,
        });

        if (!response.data) {
            throw new Error();
        }
        window.location.href = `/articles/${response.data.id}`;
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue([ValidateNewArticleError.SERVER_ERROR_SAVE]);
    }
});
