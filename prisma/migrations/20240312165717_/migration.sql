/*
  Warnings:

  - Made the column `symbol` on table `Currency` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Currency` MODIFY `symbol` VARCHAR(191) NOT NULL;
