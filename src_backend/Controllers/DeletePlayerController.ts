import { FastifyRequest, FastifyReply } from "fastify";
import { DeletePlayerService } from "../services/DeletePlayerService";

class DeletePlayerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        // Extrair playerId dos parâmetros da rota
        const { playerId } = request.params as { playerId: string };

        // Verifica se o playerId foi fornecido
        if (!playerId) {
            reply.status(400).send({ error: "playerId é obrigatório" });
            return;
        }

        try {
            const deletePlayerService = new DeletePlayerService();
            const response = await deletePlayerService.execute({ playerId });
            reply.send(response);
        } catch (error) {
            reply.status(500).send({ error: (error as Error).message });
        }
    }
}

export { DeletePlayerController };
