/*
  Warnings:

  - You are about to drop the column `userId` on the `Suggestion` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Suggestion" DROP CONSTRAINT "Suggestion_userId_fkey";

-- AlterTable
ALTER TABLE "Suggestion" DROP COLUMN "userId";
