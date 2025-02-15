import {prisma} from '@/prisma/prisma-client'
import {Order} from '@/types/types'


export const postOrder = async (data: Order) => {

    await prisma.order.create({
        data: {
            name: data.name,
            phone: data.phone,
            comments: data.comments,
        }
    })

    return
}