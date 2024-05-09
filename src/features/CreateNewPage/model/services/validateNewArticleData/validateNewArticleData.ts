import {
    ArticleBlock,
    ArticleBlockType,
    CreateNewArticle,
} from '@/entities/Article';
import { ValidateNewArticleError } from '../../consts/consts';

export const validateNewArticleData = async (
    newArticleData?: CreateNewArticle,
) => {
    if (!newArticleData) {
        return [ValidateNewArticleError.NO_DATA];
    }

    const { title, newBlocks, img, subtitle } = newArticleData;
    const errors: ValidateNewArticleError[] = [];

    if (!title) errors.push(ValidateNewArticleError.INCORRECT_TITLE);
    if (!subtitle) errors.push(ValidateNewArticleError.INCORRECT_SUBTITLE);

    function checkImageUrl(url: string) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                resolve(true); // Изображение загружено успешно
            };
            img.onerror = () => {
                resolve(false); // Произошла ошибка при загрузке изображения
            };
            img.src = url; // Устанавливаем URL для проверки
        });
    }

    if (!img) {
        errors.push(ValidateNewArticleError.INCORRECT_IMG_URL_EMPTY);
    } else {
        const isValid = await checkImageUrl(img);
        if (!isValid) {
            errors.push(ValidateNewArticleError.INCORRECT_IMG_URL_INVALID);
        }
    }

    function checkNewBlockData(blockData: ArticleBlock) {
        const { type, id } = blockData;
        switch (type) {
            case ArticleBlockType.TEXT:
                if (!blockData.paragraphs.length) {
                    errors.push(
                        ValidateNewArticleError.INCORRECT_NEW_TEXT_BLOCK,
                    );
                }
                break;
            case ArticleBlockType.CODE:
                if (!blockData.code) {
                    errors.push(
                        ValidateNewArticleError.INCORRECT_NEW_CODE_BLOCK,
                    );
                }
                break;
            case ArticleBlockType.IMAGE:
                if (!blockData.src) {
                    errors.push(
                        ValidateNewArticleError.INCORRECT_IMG_URL_SRC_EMPTY,
                    );
                }
                if (!blockData.title) {
                    errors.push(
                        ValidateNewArticleError.INCORRECT_NEW_IMAGE_BLOCK_TITLE,
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
