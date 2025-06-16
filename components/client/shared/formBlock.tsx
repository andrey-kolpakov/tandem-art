'use client'

import React, {useEffect, memo} from 'react'
import {Form} from '../index'
import {submitForm} from '@/actions/index'
import './styles/formBlock.scss'

interface Props {
    className?: string;
    formBlockOrigin: string
}

export const FormBlock: React.FC<Props> = ({className, formBlockOrigin}) => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src =
            'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0dbf110f322557ea4f38273ef26c342616afea59e0e332c1d3a6763a0f43bc93&width=100%25&height=100%25&lang=ru_RU&scroll=true'
        script.async = true
        script.charset = 'utf-8'

        const mapContainer = document.getElementById('yandex-map-container')
        if (mapContainer) {
            mapContainer.innerHTML = ''
            mapContainer.appendChild(script)
        }
    }, [])

    return (
        <div className="form-block">
            <div className="form-block__image">
                <div
                    id="yandex-map-container"
                    style={{ width: '100%', height: '100%' }}
                ></div>
            </div>
            <div className="form-block__form">
                <h2>Ответим на ваши вопросы</h2>
                <Form submitAction={submitForm} formOrigin={formBlockOrigin} />
            </div>
        </div>
    )
}
