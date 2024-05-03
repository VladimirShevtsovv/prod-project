import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateNewArticleSchema } from '../types/CreteNewArticlePageSliceSchema';
import {
    ArticleBlockType,
    ArticleType,
    CreateNewArticle,
} from '@/entities/Article';

const initialState: CreateNewArticleSchema = {
    isLoading: false,
    error: undefined,
    data: {
        typeOfNewArticle: ArticleType.ALL,
        newBlockType: ArticleBlockType.TEXT,
        newBlocks: [],
    },
};

export const revertAll = createAction('REVERT_ALL');
export const createNewArticleSlice = createSlice({
    name: 'createNewArticle',
    initialState,
    reducers: {
        cancelEdit: (state) => {
            // state.validateErrors = undefined;
        },
        updateNewArticleData: (
            state,
            action: PayloadAction<CreateNewArticle>,
        ) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(revertAll, () => initialState);
        // .addCase(fetchProfileData.pending, (state) => {
        //     state.error = undefined;
        //     state.isLoading = true;
        // })
        // .addCase(
        //     fetchProfileData.fulfilled,
        //     (state, action: PayloadAction<Profile>) => {
        //         state.isLoading = false;
        //         state.data = action.payload;
        //         state.form = action.payload;
        //     },
        // )
        // .addCase(fetchProfileData.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // })
        // .addCase(updateProfileData.pending, (state) => {
        //     state.validateErrors = undefined;
        //     state.isLoading = true;
        // })
        // .addCase(
        //     updateProfileData.fulfilled,
        //     (state, action: PayloadAction<Profile>) => {
        //         state.isLoading = false;
        //         state.data = action.payload;
        //         state.form = action.payload;
        //         state.readonly = true;
        //         state.validateErrors = undefined;
        //     },
        // )
        // .addCase(updateProfileData.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.validateErrors = action.payload;
        // });
    },
});

// Action creators are generated for each case reducer function
export const { actions: createNewArticleActions } = createNewArticleSlice;
export const { reducer: createNewArticleReducer } = createNewArticleSlice;
