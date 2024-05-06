import {
    ArticleBlock,
    ArticleBlockType,
    CreateNewArticle,
} from '@/entities/Article';
import { ValidateNewArticleError } from '../../consts/consts';

export const validateNewArticleData = (newArticleData?: CreateNewArticle) => {
    if (!newArticleData) {
        return [ValidateNewArticleError.NO_DATA];
    }

    const { title, newBlocks, img, subtitle } = newArticleData;
    const errors: (ValidateNewArticleError | string)[] = [];

    if (!title) errors.push(ValidateNewArticleError.INCORRECT_TITLE);
    if (!subtitle) errors.push(ValidateNewArticleError.INCORRECT_SUBTITLE);
    if (!img) errors.push(ValidateNewArticleError.INCORRECT_IMG_URL);

    // function checkImageUrl  (url: string, callback: (isValid: boolean) => void) {
    //     const img = new Image();
    //     img.onload = () => {
    //         callback(true); // Изображение загружено успешно
    //     };
    //     img.onerror = () => {
    //         callback(false); // Произошла ошибка при загрузке изображения
    //     };
    //     img.src = url; // Устанавливаем URL для проверки
    // }

    function checkNewBlockData(blockData: ArticleBlock) {
        const { type, id } = blockData;
        switch (type) {
            case ArticleBlockType.TEXT:
                if (!blockData.paragraphs.length) {
                    errors.push(
                        `${ValidateNewArticleError.INCORRECT_NEW_TEXT_BLOCK}${id}`,
                    );
                }
                break;
            case ArticleBlockType.CODE:
                if (!blockData.code) {
                    errors.push(
                        `${ValidateNewArticleError.INCORRECT_NEW_CODE_BLOCK}${id}`,
                    );
                }
                break;
            case ArticleBlockType.IMAGE:
                if (!blockData.src) {
                    errors.push(
                        `${ValidateNewArticleError.INCORRECT_NEW_IMAGE_BLOCK_SRC}${id}`,
                    );
                }
                if (!blockData.title) {
                    errors.push(
                        `${ValidateNewArticleError.INCORRECT_NEW_IMAGE_BLOCK_TITLE}${id}`,
                    );
                }
                break;
            default:
                errors.push(`Unknown block type: ${type}`);
                break;
        }
    }

    if (!newBlocks?.length) {
        errors.push(ValidateNewArticleError.INCORRECT_NEW_BLOCKS_LENGTH);
    } else {
        newBlocks.forEach(checkNewBlockData);
    }

    return errors;
};
