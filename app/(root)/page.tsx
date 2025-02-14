import "./page.scss";

import {Container, AdvertSlider, ProductsList} from "@/components/client";
import {SliderOfBanners, Product} from "@/types/types";

import {dbClient} from "@/services/dbClient";

export default async function Home() {
    const sliderData: SliderOfBanners = await dbClient.banners.getSliderByTitle('main-home') as SliderOfBanners
    const products: Product[] = await dbClient.products.getProductsAll() as Product[]

    // console.log(products)

    return (
        <div>
            <AdvertSlider images={sliderData.images}/>

            <Container className={'about-us-block'}>
                <h1>О нас</h1>
                <p className={'tp-thin'}>Мы уже много лет занимаемся тем что помогаем людям реализовывать их идеи в виде
                    красивого оформления.
                    Наша команда состоит из проффесионалов своего дела. Мы несем 100% ответсвенность за свою работу. И
                    делаем качественно!</p>
            </Container>

            <Container pd={true}  classNameOuter={'container--products-list'}>
                <ProductsList productsData={products}/>
            </Container>
        </div>
    );
}
