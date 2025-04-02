import {prisma} from './prisma-client'

async function up() {
    // Создаём пользователей
    await prisma.user.createMany({
        data: [
            {fullName: 'Admin', email: 'admin@gmail.com', password: 'admin123', role: 'ADMIN'},
            {fullName: 'John Doe', email: 'john@gmail.com', password: '123456', role: 'USER'},
        ],
    })

    await prisma.sliderOfBanners.createMany({
        data: [
            {
                title: 'main-home',

            }
        ]
    })

    await prisma.sliderImage.createMany({
        data: [
            {
                imageUrl: '/images/slider-home/1.png',
                altText: 'image1',
                sliderBannerId: 1,
                buttonUrl: '/',
                buttonText: 'Перейти',
                headerText: 'Заголовок',
                subHeaderText: 'Подзаголовок'
            },
            {
                imageUrl: '/images/slider-home/2.png',
                altText: 'image1',
                sliderBannerId: 1,
                buttonUrl: '/',
                buttonText: 'Перейти',
                headerText: 'Заголовок',
                subHeaderText: 'Подзаголовок'
            },
            {
                imageUrl: '/images/slider-home/3.png',
                altText: 'image1',
                sliderBannerId: 1,
                buttonUrl: '/',
                buttonText: 'Перейти',
                headerText: 'Заголовок',
                subHeaderText: 'Подзаголовок'
            }, {
                imageUrl: '/images/slider-home/4.png',
                altText: 'image1',
                sliderBannerId: 1,
                buttonUrl: '/',
                buttonText: 'Перейти',
                headerText: 'Заголовок',
                subHeaderText: 'Подзаголовок'
            },
            {
                imageUrl: '/images/slider-home/5.png',
                altText: 'image1',
                sliderBannerId: 1,
                buttonUrl: '/',
                buttonText: 'Перейти',
                headerText: 'Заголовок',
                subHeaderText: 'Подзаголовок'
            },
            {
                imageUrl: '/images/slider-home/6.png',
                altText: 'image1',
                sliderBannerId: 1,
                buttonUrl: '/',
                buttonText: 'Перейти',
                headerText: 'Заголовок',
                subHeaderText: 'Подзаголовок'
            },
        ]
    })

    await prisma.product.createMany({
        data: [
            {
                title: 'Стикеры виниловые',
                description: 'Высококачественные виниловые стикеры',
                price: 500,
                imageUrl: '/images/products/1.jpg',
                altText: 'Стикеры виниловые'
            },
            {
                title: 'Стикеры с ламинацией',
                description: 'Ламинированные стикеры с дополнительной защитой',
                price: 600,
                imageUrl: '/images/products/2.jpg',
                altText: 'Стикеры с ламинацией'
            },
            {
                title: 'Наклейки на прозрачном оракале',
                description: 'Прозрачные наклейки для стеклянных поверхностей',
                price: 700,
                imageUrl: '/images/products/3.jpg',
                altText: 'Наклейки на прозрачном оракале'
            },
            {
                title: 'Услуги плоттерной резки',
                description: 'Резка стикеров по индивидуальным контурам',
                price: 800,
                imageUrl: '/images/products/4.jpg',
                altText: 'Услуги плоттерной резки'
            },
            {
                title: 'Стикеры зеркального отображения',
                description: 'Зеркальные стикеры для особого эффекта',
                price: 750,
                imageUrl: '/images/products/5.jpg',
                altText: 'Стикеры зеркального отображения'
            },
            {
                title: 'Предупреждающие стикеры',
                description: 'Наклейки для обозначения опасных зон',
                price: 650,
                imageUrl: '/images/products/6.jpg',
                altText: 'Предупреждающие стикеры'
            },
            {
                title: 'Двухсторонние наклейки',
                description: 'Наклейки, видимые с двух сторон',
                price: 900,
                imageUrl: '/images/products/7.jpg',
                altText: 'Двухсторонние наклейки'
            },
            {
                title: 'Наклейки для маркировки',
                description: 'Маркировочные наклейки для упаковки и товаров',
                price: 550,
                imageUrl: '/images/products/8.jpg',
                altText: 'Наклейки для маркировки'
            },
            {
                title: 'Наклейки на автомобиль',
                description: 'Стойкие наклейки для автомобилей',
                price: 1200,
                imageUrl: '/images/products/9.jpg',
                altText: 'Наклейки на автомобиль'
            },
            {
                title: 'Брендирование',
                description: 'Наклейки с логотипом компании',
                price: 1300,
                imageUrl: '/images/products/10.jpg',
                altText: 'Брендирование'
            },
            {
                title: 'Стикеры на витрины и окна',
                description: 'Декоративные наклейки для витрин',
                price: 1100,
                imageUrl: '/images/products/11.jpg',
                altText: 'Стикеры на витрины и окна'
            },
            {
                title: 'Этикетки, штрих-коды',
                description: 'Этикетки для товаров и упаковки',
                price: 700,
                imageUrl: '/images/products/12.jpg',
                altText: 'Этикетки, штрих-коды'
            },
            {
                title: 'Наклейки для банкоматов и терминалов',
                description: 'Специальные наклейки для банкоматов',
                price: 950,
                imageUrl: '/images/products/13.jpg',
                altText: 'Наклейки для банкоматов и терминалов'
            },
            {
                title: 'Наклейки на стену',
                description: 'Декоративные наклейки для стен',
                price: 850,
                imageUrl: '/images/products/14.jpg',
                altText: 'Наклейки на стену'
            },
            {
                title: 'Наклейки на ноутбук',
                description: 'Яркие наклейки для ноутбуков',
                price: 600,
                imageUrl: '/images/products/z2.jpg',
                altText: 'Наклейки на ноутбук'
            },
            {
                title: 'Наклейки на пол',
                description: 'Износостойкие напольные наклейки',
                price: 1000,
                imageUrl: '/images/products/z4.jpg',
                altText: 'Наклейки на пол'
            }
        ]
    });

    await prisma.review.createMany({
        data: [
            {
                description: "Нам очень понравилось качество наклеек, изготовление которых мы заказали в компании «Tandem PLUS». Макет мы затянули сами, искали типографию в пятницу кто бы взялся за срочный заказ. Тандем нам все напечатали и отдали в субботу в оговоренное время. Спасибо ребятам",
                name: "Юлия Ахметова",
                linkTitle: "@goldenratio_kz",
                linkUrl: "https://www.instagram.com/goldenratio_kz/",
                imageUrl: "/images/reviews/axmat.png"
            },
            {
                description: "С компанией «Tandem PLUS» сотрудничаем уже более 10 лет (с момента их открытия). Да, есть фирмы, которые могут напечатать картины на холсте по-дешевле, но нет таких, кто сделал бы это также качественно как Тандем. В этом мы убедились и ни раз. «Тандем» для нас – это высокое качество по очень приемлемой цене и все всегда в срок.",
                name: "Татьяна Распопова",
                linkTitle: "Рекламное агентство «RIArt»",
                imageUrl: "/images/reviews/tat.png"
            },
            {
                description: "Простите, пожалуйста, но я дам вам совет - Чем читать, что думают о работе «Tandem»-а те, кто уже сотрудничает с этой компанией, лучше разместите у них свой заказ и сами убедитесь во всем том, о чем мы (довольные клиенты) здесь написали ☺ Для меня Тандем Плюс – это всегда все в срок, качественно и с улыбкой",
                name: "Игорь Зайковский",
                linkTitle: "Цех по изготовлению кухонной мебели",
                imageUrl: "/images/reviews/igzai.png"
            },
            {
                description: "Все что заказываем, получаем в срок и очень довольны этим. Если возникают вопросы, то все оперативно решается. Так держать!",
                name: "Жанна Акуова",
                linkTitle: "Гербалайф Казахстан",
                imageUrl: "/images/reviews/jan.png"
            },
            {
                description: "Я давно занимаюсь рекламой и не понаслышке знаю как бывает сложно найти ответственного производителя. «Тандем» никогда не подводил – всегда все качественно и в срок. Кроме отличных профессиональных качеств, весь персонал вежливый и приветливый. Приходишь в «Тандем» за печатью и уходить не хочется. Буду с большим удовольствием работать с ними и в дальнейшем!",
                name: "Улан Джума",
                imageUrl: "/images/reviews/ul.png"
            }
        ]
    });


    await prisma.currentIp.create({
        data: {
            ip: '95.56.127.183'
        }
    })
}


async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "SliderOfBanners" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "SliderImage" RESTART IDENTITY CASCADE`
}

async function main() {
    try {
        await down()
        await up()
    } catch (e) {
        console.error(e)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
