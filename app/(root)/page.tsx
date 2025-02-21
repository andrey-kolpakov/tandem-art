import "./page.scss";

import {prisma} from '@/prisma/prisma-client'

import {
    Container,
    AdvertSlider,
    ProductsList,
    Reviews,
    FormBlock,
    GridComponent,
    Advantages,
    ImagesGallery,
    Ford,
    GalleryData,
    WideformatPrint,

} from "@/components/client";
import {SliderOfBanners, Product, Review} from "@/types/types";

import {portfolioImages} from '@/data/portfolioImages'

import {dbClient} from "@/services/dbClient";

import * as stickersInfo from '@/data/stickersGallery'
import * as interiorInfo from '@/data/interiorPrint'

import './page.scss'

export default async function Home() {
    const sliderData: SliderOfBanners = await dbClient.banners.getSliderByTitle('main-home') as SliderOfBanners
    const products: Product[] = await dbClient.products.getProductsAll() as Product[]
    const reviews: Review[] = await dbClient.reviews.getReviewsAll() as Review[]

    // console.log(products)
    // console.log(await prisma.product.findMany())


    return (
        <div>
            {/*<AdvertSlider images={sliderData.images}/>*/}

            <Container pd={true} classNameOuter={'container--header-main'}>
                <GridComponent/>
            </Container>

            {/*<hr/>*/}

            {/*<Container className={'about-us-block'}>*/}
            {/*    <h1>О нас</h1>*/}
            {/*    <p className={'tp-thin'}>Мы уже много лет занимаемся тем что помогаем людям реализовывать их идеи в виде*/}
            {/*        красивого оформления.*/}
            {/*        Наша команда состоит из проффесионалов своего дела. Мы несем 100% ответсвенность за свою работу. И*/}
            {/*        делаем качественно!</p>*/}
            {/*</Container>*/}

            <Container pd={true}>
                <Advantages/>
            </Container>

            <hr />

            <Container pd={true} id={'wideformatprint'}>
                <WideformatPrint/>
            </Container>

            {/*<Container pd={true} classNameOuter={'container--products-list'}>*/}
            {/*    <ProductsList productsData={products}/>*/}
            {/*</Container>*/}

            <hr/>

            <Container pd={true}>
                <Ford/>
            </Container>

            <hr/>

            <Container pd={true}>
                <ImagesGallery images={portfolioImages} header={'Портфолио'}/>
            </Container>

            <hr/>


            <Container pd={true} id={'stickers'}>
                <GalleryData galleryData={stickersInfo.galleryData} subheader={stickersInfo.subheader}
                             header={stickersInfo.header} mainDescription={stickersInfo.text} link={'stickers'}/>
            </Container>

            <hr/>

            {/*<Container>*/}
            {/*    <Reviews reviewsData={reviews}/>*/}
            {/*</Container>*/}

            <Container pd={true}>
                <GalleryData galleryData={interiorInfo.galleryData} subheader={interiorInfo.subheader}
                             header={interiorInfo.header} mainDescription={interiorInfo.text} link={'interior'}/>
            </Container>

            <hr/>

            <Container pd={true} id={'contacts'}>
                <FormBlock formBlockOrigin={'Главная страница блок-форма'}/>
            </Container>
        </div>
    );
}
