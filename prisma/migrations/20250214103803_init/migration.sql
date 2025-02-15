/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SliderBanner` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_sliderBannerId_fkey";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "SliderBanner";

-- CreateTable
CREATE TABLE "SliderOfBanners" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "SliderOfBanners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SliderImage" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "altText" TEXT NOT NULL,
    "sliderBannerId" INTEGER,
    "buttonUrl" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL,
    "headerText" TEXT NOT NULL,
    "subHeaderText" TEXT NOT NULL,

    CONSTRAINT "SliderImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SliderImage" ADD CONSTRAINT "SliderImage_sliderBannerId_fkey" FOREIGN KEY ("sliderBannerId") REFERENCES "SliderOfBanners"("id") ON DELETE SET NULL ON UPDATE CASCADE;
