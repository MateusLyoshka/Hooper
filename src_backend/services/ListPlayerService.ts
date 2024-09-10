import prismaClient from "../prisma";

export class ListPlayerService {
    async execute() {
        const player = await prismaClient.player.findMany();
        return player;
    }
}
