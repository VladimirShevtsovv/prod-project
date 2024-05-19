import { User } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../../model/consts/consts';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleImageBlock
    | ArticleTextBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    user: User;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export interface CreateNewArticle {
    title?: string;
    subtitle?: string;
    img?: string;
    type?: ArticleType[];
    newBlockType?: ArticleBlockType;
    blocks?: ArticleBlock[];
    typeOfNewArticle?: ArticleType;

    id?: string;
    views?: number;
    user?: User;
    createdAt?: string;
}

export interface CreateNewArticleDescriptionBlock {
    id?: string;
    value?: ArticleBlockType;
}
