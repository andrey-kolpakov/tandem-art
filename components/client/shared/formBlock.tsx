'use client'

//formBlock.tsx
import React, {useEffect, memo} from 'react';

import {Form} from '../index'
import {submitForm} from "@/actions/index";

import './styles/formBlock.scss'

import { load } from '@2gis/mapgl';

interface Props {
    className?: string;
    formBlockOrigin: string
}

const MapWrapper = memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
    },
    () => true,
);

export const FormBlock: React.FC<Props> = ({className, formBlockOrigin}) => {

    useEffect(() => {
        let map: any;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: 'Your API access key',
            });
        });

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);

    return (
        <div className={'form-block'}>
            <div className={'form-block__image'}>
                <div style={{ width: '100%', height: '100%' }}>
                    <MapWrapper />
                </div>

            </div>
            <div className={'form-block__form'}>
                <h2>Ответим на ваши вопросы</h2>
                <Form submitAction={submitForm} formOrigin={formBlockOrigin}/></div>
        </div>
    );
};
