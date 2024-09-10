import  prismaClient  from "../prisma";

interface DeletePlayerProps {
    playerId: string;
}


class DeletePlayerService {

    async execute({playerId}: DeletePlayerProps) {
        if(!playerId){
            throw new Error("Preencha o campo playerId");
        }

    const findPlayer = await prismaClient.player.findFirst({
        where:{
            playerId: playerId,
        }
})

if(!findPlayer){
    throw new Error("Player não encontrado");
}

await prismaClient.player.delete({
    where:{
        playerId: findPlayer.playerId,
    }
})
return {message: "Player deletado com sucesso"};

}
}
export { DeletePlayerService };