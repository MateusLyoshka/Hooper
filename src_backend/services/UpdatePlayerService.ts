import prismaClient from "../prisma";

interface UpdatePlayerProps {
  nomePlayer?: string;
  numeroCelular?: string;
  email?: string;
  CPF?: string;
  password?: string;
  confirmPassword?: string;
  confirmEmail?: string;

  stats?: {
    gamesplayed?: number;
    gameswon?: number;
    points?: number;
    assists?: number;
    rebounds?: number;
    blocks?: number;
    position?: string;
    dominantHand?: string;
    Height?: string;
  };
}

class UpdatePlayerService {
  async execute(playerId: string, updateData: UpdatePlayerProps) {
    if (!playerId) {
      throw new Error("O ID do jogador deve ser fornecido.");
    }

    // Verifica se o jogador existe
    const existingPlayer = await prismaClient.player.findUnique({
      where: {
        playerId: playerId,
      },
      include: {
        stats: true, // Inclui stats para garantir que podemos atualizar
      },
    });

    if (!existingPlayer) {
      throw new Error("Jogador não encontrado.");
    }

    // Atualiza os campos fornecidos, incluindo as estatísticas
    const updatedPlayer = await prismaClient.player.update({
      where: {
        playerId: playerId,
      },
      data: {
        nomePlayer: updateData.nomePlayer,
        numeroCelular: updateData.numeroCelular,
        email: updateData.email,
        CPF: updateData.CPF,
        password: updateData.password,
        confirmPassword: updateData.confirmPassword,
        confirmEmail: updateData.confirmEmail,
        //stats: updateData.stats as statsUncheckedUpdateManyWithoutPlayerNestedInput,
      },
      include: {
        stats: true, // Inclui stats na resposta
      },
    });

    return updatedPlayer;
  }
}

export { UpdatePlayerService };
