import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePlayerService } from "../services/CreatePlayerService";

class CreatePlayerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { 
            nomePlayer, 
            numeroCelular, 
            email, 
            CPF, 
            password, 
            confirmPassword, 
            confirmEmail, 
            stats 
        } = request.body as CreatePlayerRequestBody;
        
        // Verifica se todos os campos necessários estão presentes
        if (!nomePlayer || !numeroCelular || !email || !CPF || !password || !confirmPassword || !confirmEmail || !stats) {
            return reply.status(400).send({ error: "Preencha todos os campos" });
        }

        const createPlayerService = new CreatePlayerService();
        try {
            const player = await createPlayerService.execute({
                nomePlayer,
                numeroCelular,
                email,
                CPF,
                confirmPassword,
                password,
                confirmEmail,
                stats
            });

            reply.send(player);
        } catch (error) {
            reply.status(500).send({ error: (error as Error).message });
        }
    }
}

export { CreatePlayerController };
