/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `lastLogin` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phoneWA` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[no_hp]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `id_user` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX `User_phoneWA_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `isActive`,
    DROP COLUMN `lastLogin`,
    DROP COLUMN `name`,
    DROP COLUMN `phoneWA`,
    DROP COLUMN `role`,
    ADD COLUMN `bio` VARCHAR(191) NULL,
    ADD COLUMN `id_user` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama` VARCHAR(191) NULL,
    ADD COLUMN `no_hp` VARCHAR(191) NULL,
    ADD COLUMN `title` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id_user`);

-- CreateTable
CREATE TABLE `Keahlian` (
    `id_keahlian` VARCHAR(191) NOT NULL,
    `nama_keahlian` VARCHAR(191) NULL,
    `desk_keahlian` VARCHAR(191) NULL,

    PRIMARY KEY (`id_keahlian`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sertifikat` (
    `id_sertifikat` VARCHAR(191) NOT NULL,
    `nama_sertifikat` VARCHAR(191) NULL,
    `desk_sertifikat` VARCHAR(191) NULL,

    PRIMARY KEY (`id_sertifikat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Karya` (
    `id_karya` VARCHAR(191) NOT NULL,
    `nama_karya` VARCHAR(191) NULL,
    `desk_karya` VARCHAR(191) NULL,
    `foto_karya` VARCHAR(191) NULL,

    PRIMARY KEY (`id_karya`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_no_hp_key` ON `User`(`no_hp`);
