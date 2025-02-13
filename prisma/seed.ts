import { prisma } from './prisma-client'

async function up() {
    // Создаём страны
    await prisma.country.createMany({
        data: [{ name: 'США' }, { name: 'Казахстан' }, { name: 'Германия' }],
    })

    // Создаём города
    await prisma.city.createMany({
        data: [
            { name: 'Нур-Султан', countryId: 2 },
            { name: 'Алматы', countryId: 2 },
            { name: 'Нью-Йорк', countryId: 1 },
            { name: 'Берлин', countryId: 3 },
        ],
    })

    // Создаём пользователей
    await prisma.user.createMany({
        data: [
            { fullName: 'Admin', email: 'admin@gmail.com', password: 'admin123', role: 'ADMIN', countryId: 1, cityId: 3 },
            { fullName: 'John Doe', email: 'john@gmail.com', password: '123456', role: 'USER', countryId: 1, cityId: 3 },
            { fullName: 'Алия Ахметова', email: 'aliya@gmail.com', password: 'qwerty', role: 'USER', countryId: 2, cityId: 1 },
            { fullName: 'Максим Иванов', email: 'max@gmail.com', password: '654321', role: 'USER', countryId: 3, cityId: 4 },
        ],
    })

    // Создаём категории
    await prisma.category.createMany({
        data: [
            {
                link: 'top-clothes',
                categoryName: 'Верхняя одежда',
                imageUrl: '/images/categories-sample/1.png',
            },
            {
                link: 'category-2',
                categoryName: 'Блузки и рубашки',
                imageUrl: '/images/categories-sample/2.png',
            },
            {
                link: 'category-3',
                categoryName: 'Юбки',
                imageUrl: '/images/categories-sample/3.png',
            },
            {
                link: 'category-4',
                categoryName: 'Брюки и шорты',
                imageUrl: '/images/categories-sample/4.jpeg',
            },
        ],
    })

    // Создаём товары
    await prisma.product.createMany({
        data: [
            {
                name: 'Красное вечернее платье',
                art: 'sdpivspdji',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 1,
            },
            {
                name: 'Красное вечернее платье',
                art: 'fsdaggasdfga',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 1,
            },
            {
                name: 'Красное вечернее платье',
                art: 'sdpivspdji',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 1,
            },
            {
                name: 'Красное вечернее платье',
                art: 'sdpivspdji',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 2,
            },
            {
                name: 'Красное вечернее платье',
                art: 'fsdaggasdfga',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 2,
            },
            {
                name: 'Красное вечернее платье',
                art: 'sdpivspdji',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 2,
            },
            {
                name: 'Красное вечернее платье',
                art: 'sdpivspdji',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 3,
            },
            {
                name: 'Красное вечернее платье',
                art: 'fsdaggasdfga',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 3,
            },
            {
                name: 'Красное вечернее платье',
                art: 'sdpivspdji',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 3,
            },
            {
                name: 'Красное вечернее платье',
                art: 'sdpivspdji',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 4,
            },
            {
                name: 'Красное вечернее платье',
                art: 'fsdaggasdfga',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 4,
            },
            {
                name: 'Красное вечернее платье',
                art: 'sdpivspdji',
                mainDescription: 'Красное вечернее платье с открытой спиной и глубоким',
                additionalDescription:
                    'Красное вечернее платье с открытой спиной и глубоким вырезом. Платье сшито из качественного материала, который не мнется и не теряет форму после стирки. Платье подойдет для любого торжества и праздника. В таком платье вы будете выглядеть стильно и элегантно.',
                price: 8999,
                imageUrl: '/images/product-sample.png',
                categoryId: 4,
            },
        ],
    })

    // Создаём размеры
    await prisma.size.createMany({
        data: [{ value: 'XS' }, { value: 'S' }, { value: 'M' }, { value: 'L' }, { value: 'XL' }],
    })

    // Создаём цвета
    await prisma.color.createMany({
        data: [{ value: 'Красный' }, { value: 'Синий' }, { value: 'Чёрный' }],
    })

    // Создаём преимущества
    await prisma.advantage.createMany({
        data: [{ title: 'Состав: 100% полиэстер' }, { title: 'Стирка: 30 градусов' }, { title: 'Сезон: весна-лето' }],
    })

    // Создаём вопросы-ответы
    await prisma.faqItem.createMany({
        data: [
            { question: 'Как правильно подобрать размер?', answer: 'Ориентируйтесь на таблицу размеров.' },
            { question: 'Можно ли стирать в машинке?', answer: 'Да, но в щадящем режиме.' },
        ],
    })

    // Создаём корзины пользователей
    await prisma.cart.createMany({
        data: [{ userId: 1 }, { userId: 2 }, { userId: 3 }],
    })

    // Добавляем товары в корзину
    await prisma.cartItem.createMany({
        data: [
            { cartId: 1, productId: 1, quantity: 1 },
            { cartId: 2, productId: 2, quantity: 2 },
        ],
    })

    // Создаём заказы
    await prisma.order.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 199.99,
                status: 'PENDING',
                paymentId: 'PAY12345',
                items: '[{"productId":1,"quantity":1}]',
                fullName: 'John Doe',
                adress: 'ул. 1, Нью-Йорк',
                phone: '+1234567890',
                comment: 'Оставьте у двери',
            },
        ],
    })

    // Создаём коды верификации
    await prisma.verificationCode.createMany({
        data: [
            { userId: 1, code: '123456' },
            { userId: 2, code: '654321' },
        ],
    })

    
}

// async function connection() {
//     // Добавляем размеры ко всем товарам
//     const products = await prisma.product.findMany()

//     const sizes = await prisma.size.findMany()
//     const colors = await prisma.color.findMany()

//     for (const product of products) {
//         await prisma.product.update({
//             where: { id: product.id },
//             data: {
//                 size: {
//                     connect: sizes.map((size) => ({ id: size.id })),
//                 },
//             },
//         })
//     }

//     for (const product of products) {
//         await prisma.product.update({
//             where: { id: product.id },
//             data: {
//                 color: {
//                     connect: colors.map((color) => ({ id: color.id })),
//                 },
//             },
//         })
//     }
// }

function getRandomSubset<T>(array: T[]): T[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
    const size = Math.floor(Math.random() * (array.length + 1)) // Случайное количество элементов
    return shuffled.slice(0, size)
}

async function connection() {
    const products = await prisma.product.findMany()
    
    const sizes = await prisma.size.findMany()
    const colors = await prisma.color.findMany()
    const advantages = await prisma.advantage.findMany()
    const faqItems = await prisma.faqItem.findMany()

    for (const product of products) {
        const randomSizes: { id: number }[] = getRandomSubset(sizes)
        const randomColors: { id: number }[] = getRandomSubset(colors)
        const randomAdvantages: { id: number }[] = getRandomSubset(advantages)
        const randomFaqItems: { id: number }[] = getRandomSubset(faqItems)

        await prisma.product.update({
            where: { id: product.id },
            data: {
                size: {
                    connect: randomSizes.map((size: { id: number }) => ({ id: size.id })),
                },
                color: {
                    connect: randomColors.map((color: { id: number }) => ({ id: color.id })),
                },
                advantage: {
                    connect: randomAdvantages.map((advantage: { id: number }) => ({ id: advantage.id })),
                },
                faqItem: {
                    connect: randomFaqItems.map((faqItem: { id: number }) => ({ id: faqItem.id })),
                },
            },
        })
    }
}



async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Country" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "City" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Size" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Color" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Advantage" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "FaqItem" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "_ProductToSize" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "_AdvantageToProduct" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "_ColorToProduct" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "_FaqItemToProduct" RESTART IDENTITY CASCADE`
}

async function main() {
    try {
        await down()
        await up()
        await connection()
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
