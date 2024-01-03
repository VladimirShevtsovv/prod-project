import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assetes/icons/main-20-20.svg';
import AboutIcon from 'shared/assetes/icons/about-20-20.svg';
import ProfileIcon from 'shared/assetes/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assetes/icons/article-20-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.article,
        text: 'Статьи',
        Icon: ArticleIcon,
        authOnly: true,
    },
];
