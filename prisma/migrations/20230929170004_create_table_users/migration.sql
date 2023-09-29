/*
  Warnings:

  - You are about to drop the column `image` on the `studies` table. All the data in the column will be lost.
  - Added the required column `file` to the `studies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "studies" DROP COLUMN "image",
ADD COLUMN     "file" TEXT NOT NULL;
