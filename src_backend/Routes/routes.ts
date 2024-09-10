import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CreatePlayerController } from "../Controllers/CreatePlayerController";
import { ListPlayerController } from "../Controllers/ListPlayerControllers";
export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

// WASAAAAAAAAA
    fastify.get("/isup", async (request: FastifyRequest, reply: FastifyReply) => {
        return {hello: "world"};
    });
 
// CREATE PLAYERSSSS 
fastify.post("/player", async (request: FastifyRequest, reply: FastifyReply) => {
    return await new CreatePlayerController().handle(request, reply);
    });

// LIST PLAYERS
fastify.get("/player", async (request: FastifyRequest, reply: FastifyReply) => {
    return await new ListPlayerController().handle(request, reply);
    });

// DELETE PLAYERS
fastify.delete("/player", async (request: FastifyRequest, reply: FastifyReply) => {
        return await new ListPlayerController().handle(request, reply);
});
}
