import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/consts/router';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLE]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    };

    return toolbarByAppRoute[appRoute];
}
