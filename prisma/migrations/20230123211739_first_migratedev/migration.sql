-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);
