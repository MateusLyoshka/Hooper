import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePlayerService } from "../services/CreatePlayerService";

class CreatePlayerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const{nomePlayer, numeroCelular, email, CPF, Height, confirmPassword, password, confirmEmail} = request.body as {nomePlayer: string, numeroCelular: string, email: string, CPF: string, Height: number, confirmPassword: string, password: string, confirmEmail: string};
        
        const createPlayerService = new CreatePlayerService();
        const player = await createPlayerService.execute({nomePlayer, numeroCelular, email, CPF, Height, confirmPassword, password, confirmEmail});
        reply.send(player);
    }
}

export { CreatePlayerController };