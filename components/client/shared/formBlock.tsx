'use client'

import React, { useEffect } from 'react'
import { Form } from '../index'
import { submitForm } from '@/actions/index'
import './styles/formBlock.scss'

interface Props {
    className?: string
    formBlockOrigin: string
}

export const FormBlock: React.FC<Props> = ({ className, formBlockOrigin }) => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
        script.type = 'text/javascript'
        script.onload = () => {
            // @ts-ignore
            window.ymaps.ready(() => {
                // @ts-ignore
                const myMap = new window.ymaps.Map('yandex-map-container', {
                    center: [43.232894, 76.906119],
                    zoom: 17,
                    controls: [], // можно убрать, если не надо
                })

                // @ts-ignore
                const myPlacemark = new window.ymaps.Placemark(
                    [43.232894, 76.906119],
                    {
                        hintContent: 'Tandem Art',
                        balloonContent: 'Наш адрес: г.Алматы, ул.Мустафы Озтюрка 11а, офис 1\n',
                    },
                    {
                        iconLayout: 'default#image',
                        iconImageHref: '/images/logo.svg',
                        iconImageSize: [80, 80],
                        iconImageOffset: [-40, -80],
                    }
                )

                myMap.options.set('suppressMapOpenBlock', true)
                myMap.geoObjects.add(myPlacemark)
            })
        }

        document.head.appendChild(script)
    }, [])

    return (
        <div className="form-block" id={'formBlock'}>
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
