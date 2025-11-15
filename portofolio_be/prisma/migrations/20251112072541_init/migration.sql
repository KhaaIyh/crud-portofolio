/*
  Warnings:

  - Added the required column `updatedAt` to the `Karya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Keahlian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Sertifikat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `karya` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `keahlian` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `sertifikat` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `github` VARCHAR(191) NULL,
    ADD COLUMN `instagram` VARCHAR(191) NULL,
    ADD COLUMN `linkedin` VARCHAR(191) NULL;
