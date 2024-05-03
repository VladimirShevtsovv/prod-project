import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/consts';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';

interface CreateNewBlockTabsProps {
    className?: string;
    value?: ArticleBlockType;
    onChange: (type: ArticleBlockType) => void;
    onCreate: (data: ArticleBlock[]) => void;
    blocks?: ArticleBlock[];
}

export const CreateNewBlockTabsSelector = memo(
    (props: CreateNewBlockTabsProps) => {
        const {
            className,
            onChange,
            onCreate,
            value = ArticleBlockType.TEXT,
            blocks,
        } = props;

        const { t } = useTranslation();

        const newBlockTypes = useMemo<TabItem[]>(
            () => [
                {
                    value: ArticleBlockType.TEXT,
                    content: t('Блок - текст'),
                },
                {
                    value: ArticleBlockType.IMAGE,
                    content: t('Блок - картинка'),
                },
                {
                    value: ArticleBlockType.CODE,
                    content: t('Блок - код'),
                },
            ],
            [t],
        );

        const onTabClick = useCallback(
            (tab: TabItem) => {
                onChange(tab.value as ArticleBlockType);
            },
            [onChange],
        );

        const onCreateHandler = useCallback(() => {
            let data: ArticleBlock;
            const newBlocks = blocks || [];
            const id = String(newBlocks.length);
            switch (value) {
                case ArticleBlockType.CODE:
                    data = { id, code: '', type: value };
                    break;
                case ArticleBlockType.IMAGE:
                    data = { id, src: '', title: '', type: value };
                    break;
                case ArticleBlockType.TEXT:
                    data = { id, paragraphs: [], title: '', type: value };
                    break;
                default:
                    data = {
                        id,
                        paragraphs: [],
                        title: '',
                        type: ArticleBlockType.TEXT,
                    };
            }
            onCreate([...newBlocks, data]);
        }, [blocks, onCreate, value]);

        return (
            <VStack>
                <HStack>
                    <Tabs
                        direction="row"
                        tabs={newBlockTypes}
                        value={value}
                        onTabClick={onTabClick}
                        className={classNames('', {}, [className])}
                    />
                    <Button onClick={() => onCreateHandler()}>
                        {t('Добавить блок')}
                    </Button>
                </HStack>
                {blocks?.map((block) => {
                    const { id, type } = block;
                    return (
                        <div>
                            {id}
                            {type}
                        </div>
                    );
                })}
            </VStack>
        );
    },
);
