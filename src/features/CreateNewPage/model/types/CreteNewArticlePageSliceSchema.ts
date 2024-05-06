import { CreateNewArticle } from '@/entities/Article';
import { ValidateNewArticleError } from '../consts/consts';

export interface CreateNewArticleSchema {
    data: CreateNewArticle;
    isLoading: boolean;
    error?: string;
    validateErrors?: (ValidateNewArticleError | string)[];
}
