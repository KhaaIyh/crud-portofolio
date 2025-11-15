/*
  Warnings:

  - You are about to drop the `karya` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `keahlian` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sertifikat` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `profile` TEXT NULL;

-- DropTable
DROP TABLE `karya`;

-- DropTable
DROP TABLE `keahlian`;

-- DropTable
DROP TABLE `sertifikat`;

-- CreateTable
CREATE TABLE `Skill` (
    `id_skill` VARCHAR(191) NOT NULL,
    `nama_skill` VARCHAR(191) NULL,
    `desk_skill` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_skill`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Certificate` (
    `id_certificate` VARCHAR(191) NOT NULL,
    `nama_certificate` VARCHAR(191) NULL,
    `desk_certificate` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_certificate`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id_project` VARCHAR(191) NOT NULL,
    `nama_project` VARCHAR(191) NULL,
    `desk_project` TEXT NULL,
    `foto_project` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_project`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
