// services/CreateMatchService.ts
import prismaClient from "../prisma";

interface CreateMatchProps {
    playerId: string;          // ID do jogador (administrador) criando o match
    teamA: string;
    teamB: string;
    teamAPlayers: string[];
    teamBPlayers: string[];
    typeMatch: string;
    local: string;
    day: string;
    month: string;
    year: string;
    time: string;
    mode: string;
    court: string;
    matchduration: string;
}

class CreateMatchService {
    async execute({
        playerId,
        teamA,
        teamB,
        teamAPlayers,
        teamBPlayers,
        typeMatch,
        local,
        day,
        month,
        year,
        time,
        mode,
        court,
        matchduration
    }: CreateMatchProps) {
        // Verifica se o jogador é admin
        const player = await prismaClient.player.findUnique({
            where: {
                playerId: playerId,
            },
        });

        if (!player) {
            throw new Error("Player not found.");
        }

        if (!player.isAdmin) {
            throw new Error("Only admins can create a match.");
        }

        // Cria a partida
        const match = await prismaClient.match.create({
            data: {
                playerId, // ID do admin que está criando a partida
                teamA,
                teamB,
                teamAPlayers,
                teamBPlayers,
                typeMatch,
                local,
                day,
                month,
                year,
                time,
                mode,
                court,
                matchduration,
            },
        });

        return match;
    }
}

export { CreateMatchService };
