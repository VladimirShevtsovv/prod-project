import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import cls from './ArticleDetails.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export const ArticleDetailsSkeletons = () => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        }
        off={
            <>
                <SkeletonDeprecated
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <SkeletonDeprecated
                    className={cls.title}
                    width={300}
                    height={32}
                />
                <SkeletonDeprecated
                    className={cls.skeleton}
                    width={600}
                    height={24}
                />
                <SkeletonDeprecated
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                />
                <SkeletonDeprecated
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                />
            </>
        }
    />
);
