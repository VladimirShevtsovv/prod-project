import { CreateNewArticle } from '@/entities/Article';

export interface CreateNewArticleSchema {
    data: CreateNewArticle;
    isLoading: boolean;
    error?: string;
    // validateErrors?: ValidateProfileError[];
}
