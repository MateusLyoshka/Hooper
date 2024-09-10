import { FastifyRequest, FastifyReply } from "fastify";
import { DeletePlayerService } from "../services/DeletePlayerService";
class DeletePlayerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {playerId} = request.query as {playerId: string};

        const costumerService = new DeletePlayerService();
        const player = await costumerService.execute({playerId});
        reply.send(player);
}
}
export { DeletePlayerController };