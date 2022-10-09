-- CreateTable
CREATE TABLE "estados" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sigla" VARCHAR(2) NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "estados_pkey" PRIMARY KEY ("id")
);
