//page.tsx
import React from 'react';
import './page.scss'

import {Container, ImagesGallery, FormBlock} from '@/components/client/index'

import {stickersImages} from '@/data/stickersImages'

export default function Page() {
    return (
        <div>

            <Container>

                <ImagesGallery images={stickersImages} header={'Стикеры'}/>

            </Container>

            <Container>

                <div className="advantage-page-list">
                    <div className="advantage-page-list__item">
                        <h2>Для любых целей и вида</h2>
                        <p>Износостойкие, ламинированные, односторонние и двухсторонние. Светоотражающие и
                            светонакапливающие.
                            Зеркального отображения</p>
                        <p>Для маркировки, для кофеен и банков, детских садов и автопарков, йогастудий, театров,
                            промо-акций, на
                            стены, на потолок, на лобовое и т.д.</p>
                    </div>

                    <div className="advantage-page-list__item">
                        <h2>Любая форма</h2>
                        <p>Круглой, овальной, прямоугольной, треугольной, многогранной, по форме изображения и даже «В форме
                            цветочка».</p>
                    </div>

                    <div className="advantage-page-list__item">
                        <h2>Любой тираж</h2>
                        <p>Любой тираж от 1 экземпляра до...На сегодняшний день самый большой тираж был 5 120 000 шт.</p>
                    </div>
                </div>




            </Container>

            <Container>

                <FormBlock formBlockOrigin={'Страница со стикерами'}/>

            </Container>

        </div>
    );
}
