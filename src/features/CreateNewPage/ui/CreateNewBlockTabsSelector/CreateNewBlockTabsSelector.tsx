import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { TabItem } from '@/shared/ui/deprecated/Tabs';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import { renderNewBlock } from './renderNewBlock';
import { ArticleBlock, ArticleBlockType } from '@/entities/Article';

interface CreateNewBlockTabsProps {
    className?: string;
    newBlockType?: ArticleBlockType;
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
            newBlockType = ArticleBlockType.TEXT,
            blocks = [],
        } = props;

        const { t } = useTranslation();
        const [newBlockId, setNewBlockId] = useState(0);

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

        const createBlock = useCallback(
            (type: ArticleBlockType, id: string): ArticleBlock => {
                switch (type) {
                    case ArticleBlockType.CODE:
                        return { id, code: '', type };
                    case ArticleBlockType.IMAGE:
                        return { id, src: '', title: '', type };
                    case ArticleBlockType.TEXT:
                    default:
                        return { id, paragraphs: [], title: '', type };
                }
            },
            [],
        );

        const onCreateHandler = useCallback(() => {
            const newBlock = createBlock(newBlockType, String(newBlockId));
            setNewBlockId((prev) => prev + 1);
            onCreate([...blocks, newBlock]);
        }, [createBlock, blocks, newBlockId, onCreate, newBlockType]);

        return (
            <VStack>
                <HStack>
                    <Tabs
                        direction="row"
                        tabs={newBlockTypes}
                        value={newBlockType}
                        onTabClick={onTabClick}
                        className={classNames('', {}, [className])}
                    />
                    <Button onClick={onCreateHandler}>
                        {t('Добавить блок')}
                    </Button>
                </HStack>
                {blocks?.map(renderNewBlock)}
            </VStack>
        );
    },
);
