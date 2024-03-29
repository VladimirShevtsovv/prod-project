import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Popover } from '@/shared/ui/deprecated/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import NotificationIcon from '@/shared/assetes/icons/notification-20-20.svg';
import { NotificationList } from '@/entities/Notification';
import cls from './NotificationButton.module.scss';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
