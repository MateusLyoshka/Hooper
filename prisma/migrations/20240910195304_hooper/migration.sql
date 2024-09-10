-- CreateTable
CREATE TABLE "players" (
    "playerId" UUID NOT NULL,
    "nomePlayer" VARCHAR(255) NOT NULL,
    "numeroCelular" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "CPF" VARCHAR(255) NOT NULL,
    "Height" DECIMAL NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "confirmPassword" VARCHAR(255) NOT NULL,
    "confirmEmail" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "players_pkey" PRIMARY KEY ("playerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "players_email_key" ON "players"("email");

-- CreateIndex
CREATE UNIQUE INDEX "players_CPF_key" ON "players"("CPF");
