import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/reouteConfig';
import MainIcon from 'shared/assetes/icons/main-20-20.svg';
import AboutIcon from 'shared/assetes/icons/about-20-20.svg';
import ProfileIcon from 'shared/assetes/icons/profile-20-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBatItemsList: SidebarItemType[] = [
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
    },
];
