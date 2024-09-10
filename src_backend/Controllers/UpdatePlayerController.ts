import { FastifyRequest, FastifyReply } from "fastify";
import { UpdatePlayerService } from "../services/UpdatePlayerService";

class UpdatePlayerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
   // const { playerId } = request.params;
  //  const updateData = request.body as UpdatePlayerProps;

    try {
      const updatePlayerService = new UpdatePlayerService();
     // const updatedPlayer = await updatePlayerService.execute(playerId, updateData);
    //  reply.send(updatedPlayer);
    } catch (error) {
      reply.status(500).send({ error: (error as Error).message });
    }
  }
}

export { UpdatePlayerController };
