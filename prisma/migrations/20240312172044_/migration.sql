/*
  Warnings:

  - You are about to drop the column `productCount` on the `ProductsOnExpenses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ProductsOnExpenses` DROP COLUMN `productCount`,
    ADD COLUMN `quantity` INTEGER NOT NULL DEFAULT 1;
