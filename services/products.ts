import { prisma } from '@/prisma/prisma-client'

export const getProductsAll = async () => {

    const products = await prisma.product.findMany()

    // console.log(products)

    return products
}