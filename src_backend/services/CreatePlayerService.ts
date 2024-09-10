import prismaClient from "../prisma";
import { Decimal } from "@prisma/client/runtime/library"; // Importa Decimal

interface CreatePlayerProps {
    nomePlayer: string;
    numeroCelular: string;
    email: string;
    CPF: string;
    confirmPassword: string;
    password: string;
    confirmEmail: string;
    stats: {
        gamesplayed: number;
        gameswon: number;
        points: number;
        assists: number;
        rebounds: number;
        blocks: number;
        Height: string;  // Espera um número para conversão
        position: string;
        dominantHand: string;
    };
}

class CreatePlayerService {
    async execute({ nomePlayer, numeroCelular, email, CPF, confirmPassword, password, confirmEmail, stats }: CreatePlayerProps) {

        // Validação para campos obrigatórios
        if (!nomePlayer || !numeroCelular || !email || !CPF || !confirmPassword || !password || !confirmEmail) {
            throw new Error("Preencha todos os campos");
        }


        const player = await prismaClient.player.create({
            data: {
                nomePlayer,
                numeroCelular,
                email,
                CPF,
                confirmPassword,
                password,
                confirmEmail,
                stats: {
                    create: {
                        gamesplayed: stats.gamesplayed,
                        gameswon: stats.gameswon,
                        points: stats.points,
                        assists: stats.assists,
                        rebounds: stats.rebounds,
                        blocks: stats.blocks,
                        Height: stats.Height,  // Converte para Decimal
                        position: stats.position,
                        dominantHand: stats.dominantHand,
                    },
                },
            },
            include: { stats: true }, // Inclui as estatísticas no retorno
        });

        return player;
    }
}

export { CreatePlayerService };
