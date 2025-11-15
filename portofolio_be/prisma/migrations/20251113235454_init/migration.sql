/*
  Warnings:

  - Added the required column `id_user` to the `Certificate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `certificate` ADD COLUMN `id_user` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `project` ADD COLUMN `id_user` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `skill` ADD COLUMN `id_user` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certificate` ADD CONSTRAINT `Certificate_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
