import { FastifyRequest, FastifyReply } from "fastify";
import { LoginService } from "../services/LoginService";

class LoginController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { email, password } = request.body as { email: string; password: string };

        try {
            const loginService = new LoginService();
            const { token, player } = await loginService.execute({ email, password });
            reply.send({ token, player });
        } catch (error) {
            reply.status(401).send({ message: (error as Error).message });
        }
    }
}

export { LoginController };
