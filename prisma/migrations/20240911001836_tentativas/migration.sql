-- AlterTable
ALTER TABLE "players" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "match" (
    "matchId" UUID NOT NULL,
    "teamA" VARCHAR(255) NOT NULL,
    "teamB" VARCHAR(255) NOT NULL,
    "teamAPlayers" TEXT[],
    "teamBPlayers" TEXT[],
    "typeMatch" VARCHAR(255) NOT NULL,
    "local" VARCHAR(255) NOT NULL,
    "day" VARCHAR(255) NOT NULL,
    "month" VARCHAR(255) NOT NULL,
    "year" VARCHAR(255) NOT NULL,
    "time" VARCHAR(255) NOT NULL,
    "mode" VARCHAR(255) NOT NULL,
    "court" VARCHAR(255) NOT NULL,
    "matchduration" VARCHAR(255) NOT NULL,
    "matchover" BOOLEAN NOT NULL DEFAULT false,
    "statusdefined" BOOLEAN NOT NULL DEFAULT false,
    "playerId" UUID NOT NULL,

    CONSTRAINT "match_pkey" PRIMARY KEY ("matchId")
);

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("playerId") ON DELETE RESTRICT ON UPDATE CASCADE;
