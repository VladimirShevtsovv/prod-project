import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { deleteArticle } from '../services/deleteArticle/deleteArticle';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleById.fulfilled,
                (state, action: PayloadAction<Article>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteArticle.pending, (state) => {
                console.log('Удаляем статью');
            })
            .addCase(deleteArticle.fulfilled, (state) => {
                console.log('Статья удалена');
            })
            .addCase(deleteArticle.rejected, (state) => {
                console.log('Не удалось удалить статью');
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
