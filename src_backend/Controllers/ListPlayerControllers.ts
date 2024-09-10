import { FastifyRequest, FastifyReply } from "fastify";
import { ListPlayerService } from "../services/ListPlayerService";

class ListPlayerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listPlayerService = new ListPlayerService();
        const player = await listPlayerService.execute();
        reply.send(player);
    }
}
export { ListPlayerController };