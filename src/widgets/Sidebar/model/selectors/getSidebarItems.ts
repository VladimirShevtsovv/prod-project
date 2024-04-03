import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import MainIconDeprecated from '@/shared/assetes/icons/main-20-20.svg';
import AboutIconDeprecated from '@/shared/assetes/icons/about-20-20.svg';
import ProfileIconDeprecated from '@/shared/assetes/icons/profile-20-20.svg';
import ArticleIconDeprecated from '@/shared/assetes/icons/article-20-20.svg';

import MainIcon from '@/shared/assetes/icons/home.svg';
import ArticleIcon from '@/shared/assetes/icons/article.svg';
import AboutIcon from '@/shared/assetes/icons/Info.svg';
import ProfileIcon from '@/shared/assetes/icons/avatar.svg';

import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticle,
    getRouteHome,
    getRouteProfile,
} from '@/shared/consts/router';
import { toggleFeatures } from '@/shared/lib/features';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteHome(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
            text: 'О сайте',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticle(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticleIconDeprecated,
                    on: () => ArticleIcon,
                }),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
};
