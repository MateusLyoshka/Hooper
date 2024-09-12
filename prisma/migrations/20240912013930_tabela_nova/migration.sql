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
    "isAdmin" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statId" UUID,

    CONSTRAINT "players_pkey" PRIMARY KEY ("playerId")
);

-- CreateTable
CREATE TABLE "games" (
    "gameId" UUID NOT NULL,
    "gameName" VARCHAR(255) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "teamA" VARCHAR(255) NOT NULL,
    "teamB" VARCHAR(255) NOT NULL,
    "teamAplayers" TEXT[],
    "teamBplayers" TEXT[],
    "type" VARCHAR(255) NOT NULL,
    "mode" VARCHAR(255) NOT NULL,
    "court" VARCHAR(255) NOT NULL,
    "matchDuration" INTEGER NOT NULL,
    "matchOver" BOOLEAN NOT NULL DEFAULT false,
    "gameDate" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "games_pkey" PRIMARY KEY ("gameId")
);

-- CreateTable
CREATE TABLE "players_games" (
    "playerId" UUID NOT NULL,
    "gameId" UUID NOT NULL,

    CONSTRAINT "players_games_pkey" PRIMARY KEY ("playerId","gameId")
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
    "position" VARCHAR(255) NOT NULL,
    "height" VARCHAR(255) NOT NULL DEFAULT '0',
    "dominantHand" VARCHAR(255) NOT NULL,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("statId")
);

-- CreateIndex
CREATE UNIQUE INDEX "players_email_key" ON "players"("email");

-- CreateIndex
CREATE UNIQUE INDEX "players_CPF_key" ON "players"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "players_statId_key" ON "players"("statId");

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_statId_fkey" FOREIGN KEY ("statId") REFERENCES "stats"("statId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players_games" ADD CONSTRAINT "players_games_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("playerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players_games" ADD CONSTRAINT "players_games_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("gameId") ON DELETE RESTRICT ON UPDATE CASCADE;
