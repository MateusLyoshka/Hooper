interface CreatePlayerRequestBody {
    nomePlayer: string;
    numeroCelular: string;
    email: string;
    CPF: string;
    password: string;
    confirmPassword: string;
    confirmEmail: string;
    stats: {
        gamesplayed: number;
        gameswon: number;
        points: number;
        assists: number;
        rebounds: number;
        blocks: number;
        Height: string; // Mantido como string, pois o esquema usa VarChar
        position: string;
        dominantHand: string;
    };
}
