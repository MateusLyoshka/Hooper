import prismaClient from "../prisma";


interface DeletePlayerProps {
    playerId: string;
}



class DeletePlayerService {
    async execute({ playerId }: DeletePlayerProps) {
        if (!playerId) {
            throw new Error("Preencha o campo playerId");
        }

        // Verifica se o jogador existe
        const findPlayer = await prismaClient.player.findUnique({
            where: {
                playerId: playerId,
            },
            include: {
                stats: true, // Inclui stats para verificar se há registros relacionados
            }
        });

        if (!findPlayer) {
            throw new Error("Player não encontrado");
        }

        // Exclui registros relacionados em stats
        await prismaClient.stats.deleteMany({
            where: {
                playerId: playerId,
            }
        });

        // Exclui o jogador
        await prismaClient.player.delete({
            where: {
                playerId: findPlayer.playerId,
            }
        });

        return { message: "Player deletado com sucesso" };
    }
}

export { DeletePlayerService };
