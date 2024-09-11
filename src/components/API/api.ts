"use server";

import prisma from "@/db/db";

const CreatePlayer = async (data:any) => {
    try{
        const response = await prisma.player.create({
            data: {
                nomePlayer: "Rogério Ceni",
                numeroCelular: "+55 11 98765-4322",
                email: "rogerio.ceni31@example.com",
                CPF: "987.654.322-32",
                password: "senha_forte_aqui",
                confirmPassword: "senha_forte_aqui",
                confirmEmail: "rogerio.ceni@example.com",
                stats: {
                    create: {
                        gamesplayed: 150,
                        gameswon: 80,
                        points: 2800,
                        assists: 350,
                        rebounds: 800,
                        blocks: 200,
                        position: "Goalkeeper",
                        dominantHand: "Right",
                        Height: "1.88",
                    }
                }
            },
            include: {
                stats: true,
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

export default CreatePlayer