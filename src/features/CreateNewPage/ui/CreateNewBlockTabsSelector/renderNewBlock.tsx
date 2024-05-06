// eslint-disable-next-line max-len
import { ArticleNewCodeBlockComponent } from '../CreateNewArticleNewBlocks/ArticleNewCodeBlockComponent/ArticleNewCodeBlockComponent';

// eslint-disable-next-line max-len
import { ArticleNewTextBlockComponent } from '../CreateNewArticleNewBlocks/ArticleNewTextBlockComponent/ArticleNewTextBlockComponent';

// eslint-disable-next-line max-len
import { ArticleNewImageBlockComponent } from '../CreateNewArticleNewBlocks/ArticleNewImageBlockComponent/ArticleNewImageBlockComponent';
import { ArticleBlock, ArticleBlockType } from '@/entities/Article';

export const renderNewBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleNewCodeBlockComponent key={block.id} block={block} />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleNewImageBlockComponent key={block.id} block={block} />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleNewTextBlockComponent key={block.id} block={block} />
            );
        default:
            return null;
    }
};
