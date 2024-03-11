/*
  Warnings:

  - The primary key for the `ProductsOnExpenses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `expanseId` on the `ProductsOnExpenses` table. All the data in the column will be lost.
  - Added the required column `expenseId` to the `ProductsOnExpenses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ProductsOnExpenses` DROP FOREIGN KEY `ProductsOnExpenses_expanseId_fkey`;

-- AlterTable
ALTER TABLE `ProductsOnExpenses` DROP PRIMARY KEY,
    DROP COLUMN `expanseId`,
    ADD COLUMN `expenseId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`expenseId`, `productId`);

-- AddForeignKey
ALTER TABLE `ProductsOnExpenses` ADD CONSTRAINT `ProductsOnExpenses_expenseId_fkey` FOREIGN KEY (`expenseId`) REFERENCES `Expense`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
