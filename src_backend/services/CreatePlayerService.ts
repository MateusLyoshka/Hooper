import prismaClient from "../prisma";
import { Decimal } from "@prisma/client/runtime/library";

interface CreatePlayerProps{
    nomePlayer: string;
    numeroCelular: string;
    email: string;
    CPF: string;
    Height: number;
    confirmPassword: string;
    password: string;
    confirmEmail: string;
}

class CreatePlayerService {
    async execute({nomePlayer, numeroCelular, email, CPF, Height, confirmPassword, password, confirmEmail}: CreatePlayerProps) {


        const player = await prismaClient.player.create({
            data: {
                nomePlayer: nomePlayer,
                numeroCelular: numeroCelular,
                email: email,
                CPF: CPF,
                Height: new Decimal(Height),  // Certifique-se de converter para Decimal
                confirmPassword: confirmPassword,
                password: password,
                confirmEmail: confirmEmail,
            }
        });
        return player;
    }
}

export { CreatePlayerService };
