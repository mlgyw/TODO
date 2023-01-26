/*
  Warnings:

  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "order";

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
