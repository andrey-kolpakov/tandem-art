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

    // Создаём коды верификации
    // await prisma.verificationCode.createMany({
    //     data: [
    //         { userId: 1, code: '123456' },
    //         { userId: 2, code: '654321' },
    //     ],
    // })

    
}


async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Country" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "City" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE`
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
