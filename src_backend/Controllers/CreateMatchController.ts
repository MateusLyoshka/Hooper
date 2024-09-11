// controllers/CreateMatchController.ts
import { FastifyRequest, FastifyReply } from "fastify";
import { CreateMatchService } from '../services/CreateMatchService';

class CreateMatchController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { playerId } = request.params as { playerId: string };
        const { teamA, teamB, teamAPlayers, teamBPlayers, typeMatch, local, day, month, year, time, mode, court, matchduration } = request.body as { teamA: string, teamB: string, teamAPlayers: string[], teamBPlayers: string[], typeMatch: string, local: string, day: string, month: string, year: string, time: string, mode: string, court: string, matchduration: string };

        const createMatchService = new CreateMatchService();

        try {
            const match = await createMatchService.execute({
                playerId,
                teamA,
                teamB,
                teamAPlayers,
                teamBPlayers,
                typeMatch,
                local,
                day,
                month,
                year,
                time,
                mode,
                court,
                matchduration
            });

            return reply.send(match);
        } catch (error) {
            return reply.status(400).send({ message: (error as Error).message });
        }
    }
}

export { CreateMatchController };
