import prismaClient from "../prisma";
import bcrypt from 'bcryptjs';
import { JWT_SECRET } from '../config/config';
import jwt from 'jsonwebtoken'; // Import the 'jwt' module

interface LoginProps {
    email: string;
    password: string;

}

class LoginService {
    async execute({ email, password}: LoginProps) {
        if (!email || !password) {
            throw new Error("Email e senha são obrigatórios");
        }

        // Encontrar o usuário no banco de dados
        const player = await prismaClient.player.findUnique({
            where: { email },
        });

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

        // Login bem-sucedido
        return { token, player };
    }
}

export { LoginService };
