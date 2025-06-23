//page.tsx
import React from 'react';
import './page.scss'

import {Container, ImagesGallery, FormBlock} from '@/components/client/index'

import {interiorGallery} from '@/data/interiorGallery'

export default function Page() {
    return (
        <div>

            <Container className={'container--page container--order-page'}>

                <ImagesGallery images={interiorGallery} header={'Интерьерная фотопечать'}/>

                <div className="advantage-page-list">
                    <div>
                        <h2>Мы создадим настоящую картину из ваших фотографий</h2>
                        <p>Каждый миг нашей жизни нам дорог и неповторим. Но есть те, особенные мгновения, которые нам
                            хотелось бы продлить или к которым хочется возвращаться снова и снова. Не отказывайте себе в
                            этом удовольствии - Пусть счастье украсит ваши стены и наполнит ваш дом. Фотографии дорогих
                            и ценных вашему сердцу моментов, выполненные на холсте, будут помогать этому.</p>
                    </div>

                    <div className="">
                        <h2>Что вы получите, заказывая изготовление модульных картин у нас?</h2>
                        <ul>
                            <li>Высокое качество цифровой печати</li>
                            <li>Яркие и сочные тона</li>
                            <li>Изделие устойчивое к выцветанию</li>
                            <li>Галерейную натяжку полотна на подрамник</li>
                            <li>Крепление в комплекте</li>
                            <li>Оригинальную идею для подарка</li>
                        </ul>
                    </div>
                </div>


            </Container>



                <FormBlock formBlockOrigin={'Страница с фотопечатью'}/>



        </div>
    );
}
