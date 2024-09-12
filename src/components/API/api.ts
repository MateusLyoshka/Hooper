"use server";

import prisma from "@/db/db";
import { Player, Stats } from "@prisma/client";
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
export const updateStats = async(id: string, stats: Stats) => {
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


