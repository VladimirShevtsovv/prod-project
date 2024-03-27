import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';

// Компонент для теста
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error === true) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={onThrow}>{t('Выбросить ошибку')}</Button>;
};
