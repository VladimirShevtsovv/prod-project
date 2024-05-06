import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateNewArticleSchema } from '../types/CreteNewArticlePageSliceSchema';
import {
    Article,
    ArticleBlock,
    ArticleBlockType,
    ArticleType,
    CreateNewArticle,
} from '@/entities/Article';
import { createNewArticle } from '../services/createNewArticle/createNewArticle';

const initialState: CreateNewArticleSchema = {
    isLoading: false,
    error: undefined,
    data: {
        typeOfNewArticle: ArticleType.ALL,
        newBlockType: ArticleBlockType.TEXT,
        newBlocks: [],
    },
    validateErrors: [],
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
        updateNewArticleBlocksData: (
            state,
            action: PayloadAction<ArticleBlock>,
        ) => {
            if (state.data.newBlocks) {
                const paylodaId = action.payload.id;
                state.data.newBlocks = state.data.newBlocks.map((newBlock) =>
                    newBlock.id === paylodaId ? action.payload : newBlock,
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(revertAll, () => initialState)
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
            .addCase(createNewArticle.pending, (state) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(
                createNewArticle.fulfilled,
                (state, action: PayloadAction<Article>) => {
                    state.isLoading = false;
                    state.validateErrors = undefined;
                    state.data = {
                        typeOfNewArticle: ArticleType.ALL,
                        newBlockType: ArticleBlockType.TEXT,
                        newBlocks: [],
                    };
                    state.validateErrors = [];
                },
            )
            .addCase(createNewArticle.rejected, (state, action) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: createNewArticleActions } = createNewArticleSlice;
export const { reducer: createNewArticleReducer } = createNewArticleSlice;
