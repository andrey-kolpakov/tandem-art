import { prisma } from '@/prisma/prisma-client'

export const getReviewsAll = async () => {

    const reviews = await prisma.review.findMany()

    // console.log(reviews)

    return reviews
}