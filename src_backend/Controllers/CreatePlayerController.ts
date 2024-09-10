import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePlayerService } from "../services/CreatePlayerService";
import { Decimal } from "@prisma/client/runtime/library";

class CreatePlayerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const{nomePlayer, numeroCelular, email, CPF, Height, confirmPassword, password, confirmEmail} = request.body as {nomePlayer: string, numeroCelular: string, email: string, CPF: string, Height: number, confirmPassword: string, password: string, confirmEmail: string};
        
        const createPlayerService = new CreatePlayerService();
        const player = await createPlayerService.execute({
            nomePlayer,
            numeroCelular,
            email,
            CPF,
            confirmPassword,
            password,
            confirmEmail,
            stats: {
                gamesplayed: 0,        // Valor inicial padrão
                gameswon: 0,           // Valor inicial padrão
                points: 0,             // Valor inicial padrão
                assists: 0,            // Valor inicial padrão
                rebounds: 0,           // Valor inicial padrão
                blocks: 0,             // Valor inicial padrão
                Height: "", // Altura convertida para Decimal
                position: "",          // Valor inicial padrão (posição vazia)
                dominantHand: ""       // Valor inicial padrão (mão dominante vazia)
            }
        });

        
        reply.send(player);
    }
}

export { CreatePlayerController };