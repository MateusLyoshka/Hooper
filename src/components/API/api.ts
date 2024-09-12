"use server";

import prisma from "@/db/db";
import { Player, Stats, Game } from "@prisma/client";
import { JWT_SECRET } from "@/app/config/config"
import jwt from 'jsonwebtoken'; // Import the 'jwt' module

export const CreatePlayer = async (player: Partial<Player>) => {
    try{
        const response = await prisma.player.create({
            data: {
                nomePlayer: player.nomePlayer ?? "",
                numeroCelular: player.numeroCelular ?? "",
                email: player.email ?? "",
                CPF: player.CPF ?? "",
                password: player.password ?? "",
                confirmPassword: player.confirmPassword ?? "",
                confirmEmail: player.confirmEmail ?? "",
                isAdmin: player.isAdmin ??  false,
                stat: {
                    create: {
                        gamesplayed: 0,
                        gameswon: 0,
                        points: 0,
                        assists: 0,
                        rebounds: 0,
                        blocks: 0,
                        position: "",
                        dominantHand: "",
                        height: "",
                    }
                }
            },
            include: {
                stat: true,
            }
        })
        return response
    }catch (error) {
        if (error) {
            console.error("Erro na solicitação:", error);
        } else {
            console.error("Erro desconhecido:", error);
        }
    }
}

export const updatePlayer = async(id: string, player: Player) => {
    try{
        const response = await prisma.player.update({
            where: {
                playerId: id
            },
            data:{
                ...player

            },
            include:{
                stat:true
            }
        })
        return response
    }catch(error){
        console.log(error)
    }
}
export const updateStats = async(id: string, stats: Partial<Stats>) => {
    try{
        const response = await prisma.stats.updateMany({
            where: {
                player: { playerId: id }
            },
            data:{
                ...stats
            },
        })
        return response
    }catch(error){
        console.log(error)
    }
}
export const LoginPlayerApi = async(email:string, password:string) => {
    const player = await prisma.player.findUnique({
        where: {
            email: email
        }
    })
    if (!player) {
        throw new Error("Email ou senha inválidos");
    }

    if(password !== player.password){
        throw new Error("Email ou senha inválidos");
    }

    if(email !== player.email){
        throw new Error("Email ou senha inválidos");
    }


    const token = jwt.sign({ playerId: player.playerId, email: player.email }, JWT_SECRET, { expiresIn: '1h' });
    // console.log("player:", player, "token:", token)
    return {player,token}

}

export const GetPlayers = async() => {
    try{
        const response = await prisma.player.findMany({
        })
        return response}
        catch(error){
        console.log(error)
    }
}

export const GetPlayerById = async(id: string) => {
    try{
        const response = await prisma.player.findUnique({
            where:{
                playerId: id
            }
        })
        console.log(response)
        return response
    }catch(error){
        console.log(error)
    }
}

export const DeletePlayer = async(id: string) => {
    try{
        const response = await prisma.player.delete({
            where:{
                playerId: id
            }
        })
        return response
    }catch(error){
        console.log(error)
    }
}

export const createGame = async(playerId: string, gameData: Partial<Game>) => {
    try{
        const player = await prisma.player.findUnique({
            where:{ playerId: playerId },
        });
        
        if(!player){
            throw new Error("Jogador não encontrado")
        }

        if (!player || !player.isAdmin) {
            throw new Error("Apenas administradores podem criar partidas.");
        }

const createGame = await prisma.game.create({
    data: {
        gameName: gameData.gameName ?? "",
        startTime: gameData.startTime ?? new Date(),
        endTime: gameData.endTime ?? new Date(),
        teamA: gameData.teamA ?? "",
        teamB: gameData.teamB ?? "",
        teamAplayers: gameData.teamAplayers ?? [],
        teamBplayers: gameData.teamBplayers ?? [],
        type: gameData.type ?? "",
        mode: gameData.mode ?? "",
        court: gameData.court ?? "",
        matchDuration: gameData.matchDuration ?? 0,
        matchOver: gameData.matchOver ?? false,
        gameDate: gameData.gameDate ?? "",
    },
});

console.log("Jogo criado com sucesso:", createGame); 
        await prisma.playerGame.create({
            data: {
                playerId: playerId,
                gameId: createGame.gameId, 
            },
        });

    return createGame;
    } catch(error) { 
    console.log(error)
    }
}

export const joinTeamA = async(playerId: string, gameId: string) => {
    try{
        const player = await prisma.player.findUnique({
            where: { playerId: playerId }
        });
        if(!player){
            throw new Error("Jogador não encontrado")
        }

        const game = await prisma.game.findUnique({
            where: { gameId: gameId }
        });
        if(!game){
            throw new Error("Partida não encontrada")
        }

        if(game.teamAplayers.length >= 5){
            throw new Error("Time A já está completo")
        }

        await prisma.game.update({
            where: { gameId: gameId },
            data: {
                teamAplayers: {
                    push: playerId
                }
            }
        });

        return game
    }catch(error){
        console.log(error)
    }
}

export const joinTeamB = async(playerId: string, gameId: string) => {
    try{
        const player = await prisma.player.findUnique({
            where: { playerId: playerId }
        });
        if(!player){
            throw new Error("Jogador não encontrado")
        }

        const game = await prisma.game.findUnique({
            where: { gameId: gameId }
        });
        if(!game){
            throw new Error("Partida não encontrada")
        }

        if(game.teamBplayers.length >= 5){
            throw new Error("Time B já está completo")
        }

        await prisma.game.update({
            where: { gameId: gameId },
            data: {
                teamBplayers: {
                    push: playerId
                }
            }
        });

        return game
    }catch(error){
        console.log(error)
    }
}

export const getGames = async() => {
    try{
        const response = await prisma.game.findMany({
        })
        return response
    }catch(error){
        console.log(error)
    }
}

export const getGameById = async(id: string) => {
    try{
        const response = await prisma.game.findUnique({
            where:{
                gameId: id
            }
        })
        console.log(response)
        return response
    }catch(error){
        console.log(error)
    }
}

export const deleteGame = async(id: string) => {
    try{
        const response = await prisma.game.delete({
            where:{
                gameId: id
            }
        })
        return response
    }catch(error){
        console.log(error)
    }
}

export const removePlayerFromTeamA = async(playerId: string, gameId: string) => {
    try{
        const game = await prisma.game.findUnique({
            where: { gameId: gameId }
        });
        if(!game){
            throw new Error("Partida não encontrada")
        }

        await prisma.game.update({
            where: { gameId: gameId },
            data: {
                teamAplayers: {
                    set: game.teamAplayers.filter((player) => player !== playerId)
                }
            }
        });

        return game
    }catch(error){
        console.log(error)
    }
}

export const removePlayerFromTeamB = async(playerId: string, gameId: string) => {
    try{
        const game = await prisma.game.findUnique({
            where: { gameId: gameId }
        });
        if(!game){
            throw new Error("Partida não encontrada")
        }

        await prisma.game.update({
            where: { gameId: gameId },
            data: {
                teamBplayers: {
                    set: game.teamBplayers.filter((player) => player !== playerId)
                }
            }
        });

        return game
    }catch(error){
        console.log(error)
    }
}

export const addStatsMatchOver = async (adminId: string, playerId: string, stats: Partial<Stats>) => {
    if (!adminId) {
        throw new Error("Apenas administradores podem atualizar as estatísticas");
    }

    try {
        // Encontre as estatísticas do jogador baseado no playerId
        const currentStats = await prisma.stats.findFirst({
            where: {
                player: {
                    playerId: playerId
                }
            },
        });

        if (!currentStats) {
            throw new Error("Estatísticas do jogador não encontradas");
        }

        // Atualize as estatísticas somando as novas estatísticas com as atuais
        const updatedStats = await prisma.stats.update({
            where: {
                statId: currentStats.statId,  // Usa o ID de stats para garantir que estamos atualizando o registro correto
            },
            data: {
                gamesplayed: currentStats.gamesplayed + (stats?.gamesplayed ?? 0),
                gameswon: currentStats.gameswon + (stats?.gameswon ?? 0),
                points: currentStats.points + (stats?.points ?? 0),
                assists: currentStats.assists + (stats?.assists ?? 0),
                rebounds: currentStats.rebounds + (stats?.rebounds ?? 0),
                blocks: currentStats.blocks + (stats?.blocks ?? 0),
            },
        });

        return updatedStats;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

