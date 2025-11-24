/*
  Warnings:

  - You are about to drop the column `assigneeId` on the `task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `Task_assigneeId_fkey`;

-- DropIndex
DROP INDEX `Task_assigneeId_fkey` ON `task`;

-- AlterTable
ALTER TABLE `task` DROP COLUMN `assigneeId`;

-- CreateTable
CREATE TABLE `taskassignment` (
    `taskId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`taskId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `taskassignment` ADD CONSTRAINT `taskassignment_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taskassignment` ADD CONSTRAINT `taskassignment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
