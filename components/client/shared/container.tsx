import React, { forwardRef } from 'react';
import clsx from 'clsx';

import '@/components/client/shared/styles/container.scss';

import type { StaticImageData } from 'next/image';

interface Props {
    className?: string;
    classNameOuter?: string;
    children?: React.ReactNode; // Добавляем тип для children
    imageURL?: StaticImageData;
    fullScreen?: boolean;
    centeredVertical?: boolean;
    centeredHorizontal?: boolean;
    stretchContent?: boolean;
    pd?: boolean;
    mtnone?: boolean;
    marginNone?: boolean;
    id?: string;
}

// Контейнер с поддержкой background и ref
export const Container = forwardRef<HTMLDivElement, Props>(
    ({ className, id, classNameOuter, children, imageURL, fullScreen, centeredVertical, centeredHorizontal, stretchContent, pd, mtnone, marginNone}, ref) => {
        return (
            <div
                // Передаём ref здесь
                className={clsx('container-outer', classNameOuter, {
                    'container-outer--full-screen': fullScreen,
                    'container-outer--centered-vertical': centeredVertical,
                    'container-outer--centered-horizontal': centeredHorizontal,
                    'container-outer--stretch-content': stretchContent,
                    'container-outer--pd': pd,
                    'container-outer--margin-top-0': mtnone,
                    'container-outer--margin-none' : marginNone
                })}

                style = {imageURL && {backgroundImage: `url(${imageURL})`}}

                id={id}
            >
                <div className={clsx(className, 'container')} ref={ref}>{children}</div>
            </div>
        );
    }
);

Container.displayName = 'ContainerBackground'; // Указываем имя компонента для отладки
