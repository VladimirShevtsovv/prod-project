import { StateSchema } from '@/app/providers/StoreProvider';

export const getCreateNewArticlePageData = (state: StateSchema) =>
    state.createNewArticlePage?.data;
export const getCreateNewArticlePageIsLoading = (state: StateSchema) =>
    state.createNewArticlePage?.isLoading;

export const getCreateNewArticlePageError = (state: StateSchema) =>
    state.createNewArticlePage?.error;

export const getCreateNewArticlePageValidateErrors = (state: StateSchema) =>
    state.createNewArticlePage?.validateErrors;
export const getCreateNewArticlePageNewBlockType = (state: StateSchema) =>
    state.createNewArticlePage?.data?.newBlockType;

export const getCreateNewArticlePageTypeOfNewArticle = (state: StateSchema) =>
    state.createNewArticlePage?.data?.typeOfNewArticle;

export const getCreateNewArticlePageNewBlocks = (state: StateSchema) =>
    state.createNewArticlePage?.data?.newBlocks;
