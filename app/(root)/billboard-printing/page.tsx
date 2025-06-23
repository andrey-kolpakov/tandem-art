// page.tsx
import React from 'react';
import './page.scss';
import {Gallery, Container, FormBlock} from '@/components/client/'

const galleryItems = [
    {src: '/images/billboard-printing/1.webp', alt: 'Стикер 1', href: '/stickers'},
    {src: '/images/billboard-printing/2.webp', alt: 'Стикер 2', href: '/stickers'},
    {src: '/images/billboard-printing/3.webp', alt: 'Стикер 3', href: '/stickers'},
    {src: '/images/billboard-printing/4.webp', alt: 'Стикер 1', href: '/stickers'},
    {src: '/images/billboard-printing/5.webp', alt: 'Стикер 2', href: '/stickers'},
    {src: '/images/billboard-printing/6.webp', alt: 'Стикер 3', href: '/stickers'},
    {src: '/images/billboard-printing/7.webp', alt: 'Стикер 3', href: '/stickers'}
]

export default function Page() {
    // console.log(galleryItems)

    return (
        <>
            <Container className={'container--page container--order-page'}>
                <Gallery items={galleryItems}/>

                <div className="print-materials">
                    <h1>Плакаты, постеры, афиши</h1>

                    <p>
                        Плакаты и постеры – одни из самых популярных и недорогих рекламных носителей. С их помощью можно
                        проинформировать потенциального клиента об акции или о появлении новой продукции, анонсировать
                        предстоящее мероприятие, украсить интерьер магазина или офиса. Также плакаты часто используются
                        в качестве наглядных и учебных пособий.
                    </p>

                    <p>
                        Наша компания выполняет печать плакатов любых форматов – А0, А1, А2, А3, А4, а также плакатов и
                        афиш нестандартных и больших размеров до 1,2 м. Печать выполняется в разрешении от 720 dpi до
                        1440 dpi.
                    </p>

                    <p>
                        Наша компания предлагает интерьерную печать на холсте картин, фотографий, постеров и других
                        изображений – достаточно только иметь исходник в электронном виде.
                    </p>

                    <p>
                        Наши технические возможности позволяют удовлетворить запросы любого заказчика – независимо от
                        того, необходима ли вам печать плакатов поштучно или большим тиражом.
                    </p>

                    <p>
                        Чтобы повысить прочность плаката, мы предлагаем его ламинацию. Это позволит надолго сохранить
                        яркость красок изделия и уберечь его от разрывов и вытирания. Вы можете выбрать матовую или
                        глянцевую ламинацию плаката.
                    </p>

                </div>


            </Container>


            <FormBlock formBlockOrigin={'Печать плакатов'}/>
        </>
    );
}

