/*
  Warnings:

  - You are about to drop the column `created_at` on the `Expense` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Expense` DROP COLUMN `created_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
