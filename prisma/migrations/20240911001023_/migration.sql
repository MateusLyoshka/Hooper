-- CreateTable
CREATE TABLE "players" (
    "playerId" UUID NOT NULL,
    "nomePlayer" VARCHAR(255) NOT NULL,
    "numeroCelular" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "CPF" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "confirmPassword" VARCHAR(255) NOT NULL,
    "confirmEmail" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "players_pkey" PRIMARY KEY ("playerId")
);

-- CreateTable
CREATE TABLE "stats" (
    "statId" UUID NOT NULL,
    "gamesplayed" INTEGER NOT NULL,
    "gameswon" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "rebounds" INTEGER NOT NULL,
    "blocks" INTEGER NOT NULL,
    "playerId" UUID NOT NULL,
    "position" VARCHAR(255) NOT NULL,
    "Height" VARCHAR(255) NOT NULL,
    "dominantHand" VARCHAR(255) NOT NULL,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("statId")
);

-- CreateIndex
CREATE UNIQUE INDEX "players_email_key" ON "players"("email");

-- CreateIndex
CREATE UNIQUE INDEX "players_CPF_key" ON "players"("CPF");

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("playerId") ON DELETE RESTRICT ON UPDATE CASCADE;
