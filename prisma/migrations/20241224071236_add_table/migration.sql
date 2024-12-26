/*
  Warnings:

  - You are about to drop the column `updateAt` on the `drinks` table. All the data in the column will be lost.
  - Added the required column `userId` to the `burgers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `pizzas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "burgers" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "drinks" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pizzas" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "drinks" ADD CONSTRAINT "drinks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "burgers" ADD CONSTRAINT "burgers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pizzas" ADD CONSTRAINT "pizzas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
