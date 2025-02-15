import { prisma } from '@/prisma/prisma-client'

const include = {
    images: {
        select: {
            id: true,
            imageUrl: true,
            altText: true,
            sliderBannerId: true,
            buttonUrl: true,
            buttonText: true,
            headerText: true,
            subHeaderText: true,
        }
    }
};

export const getSliderByTitle = async (titleString: string) => {

    const sliderData = await prisma.sliderOfBanners.findFirst({
        where: { title: titleString },
        include: include,
    })

    // console.log(sliderData)

    return sliderData
}