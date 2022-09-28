/*
  Warnings:

  - Added the required column `table_num` to the `table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "table" ADD COLUMN     "table_num" INTEGER NOT NULL;
