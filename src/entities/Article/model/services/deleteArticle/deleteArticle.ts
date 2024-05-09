import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const deleteArticle = createAsyncThunk<
    void,
    string,
    ThunkConfig<string>
>('profile/updateProfileData', async (articleId, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    try {
        const response = await extra.api.delete(`/articles/${articleId}`);

        if (!response.data) {
            throw new Error();
        }
        window.location.href = `/articles`;
        return response.data;
    } catch (e) {
        return rejectWithValue('Error');
    }
});
