import "./page.scss";

import {
    Container,
    AdvertSlider,
    ProductsList,
    Reviews,
    FormBlock,
    GridComponent,
    Advantages,
    Portfolio,
    Ford,
    GalleryData,
    WideformatPrint
} from "@/components/client";
import {SliderOfBanners, Product, Review} from "@/types/types";

import {dbClient} from "@/services/dbClient";

import * as stickersInfo from '@/data/stickersGallery'
import * as interiorInfo from '@/data/interiorPrint'

export default async function Home() {
    const sliderData: SliderOfBanners = await dbClient.banners.getSliderByTitle('main-home') as SliderOfBanners
    const products: Product[] = await dbClient.products.getProductsAll() as Product[]
    const reviews: Review[] = await dbClient.reviews.getReviewsAll() as Review[]

    // console.log(products)


    return (
        <div>
            {/*<AdvertSlider images={sliderData.images}/>*/}

            <Container>
                <GridComponent/>
            </Container>

            {/*<Container className={'about-us-block'}>*/}
            {/*    <h1>О нас</h1>*/}
            {/*    <p className={'tp-thin'}>Мы уже много лет занимаемся тем что помогаем людям реализовывать их идеи в виде*/}
            {/*        красивого оформления.*/}
            {/*        Наша команда состоит из проффесионалов своего дела. Мы несем 100% ответсвенность за свою работу. И*/}
            {/*        делаем качественно!</p>*/}
            {/*</Container>*/}

            <Container>
                <Advantages/>
            </Container>

            <Container>
                <WideformatPrint/>
            </Container>

            {/*<Container pd={true} classNameOuter={'container--products-list'}>*/}
            {/*    <ProductsList productsData={products}/>*/}
            {/*</Container>*/}

            <Container>
                <Ford/>
            </Container>

            <Container>
                <GalleryData galleryData={stickersInfo.galleryData} subheader={stickersInfo.subheader} header={stickersInfo.header} mainDescription={stickersInfo.text}/>
            </Container>

            <Container>
                <Reviews reviewsData={reviews}/>
            </Container>

            <Container>
                <GalleryData galleryData={interiorInfo.galleryData} subheader={interiorInfo.subheader} header={interiorInfo.header} mainDescription={interiorInfo.text}/>
            </Container>

            <Container>
                <FormBlock formBlockOrigin={'Главная страница блок-форма'}/>
            </Container>
        </div>
    );
}
