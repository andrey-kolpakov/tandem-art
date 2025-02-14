/*
  Warnings:

  - You are about to drop the `Banner` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Banner";

-- CreateTable
CREATE TABLE "SliderBanner" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,
    "buttonUrl" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL,
    "headerText" TEXT NOT NULL,
    "subHeaderText" TEXT NOT NULL,

    CONSTRAINT "SliderBanner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "altText" TEXT NOT NULL,
    "sliderBannerId" INTEGER,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_sliderBannerId_fkey" FOREIGN KEY ("sliderBannerId") REFERENCES "SliderBanner"("id") ON DELETE SET NULL ON UPDATE CASCADE;
