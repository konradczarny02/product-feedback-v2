/*
  Warnings:

  - You are about to drop the column `detail` on the `Suggestion` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Suggestion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `details` to the `Suggestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Suggestion" DROP COLUMN "detail",
ADD COLUMN     "details" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Suggestion_title_key" ON "Suggestion"("title");
