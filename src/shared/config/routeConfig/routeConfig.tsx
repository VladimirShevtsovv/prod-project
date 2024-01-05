import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlePage } from 'pages/ArticlePage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export type AppRouteProps = RouteProps & {
    authOnly? : boolean;
}
export enum AppRoutes {
    HOME = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE = 'article',
    ARTICLE_DETAILS = 'article_details',

    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // +id
    [AppRoutes.ARTICLE]: '/article',
    [AppRoutes.ARTICLE_DETAILS]: '/article/', // +id

    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.main,
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE]: {
        path: RoutePath.article,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
