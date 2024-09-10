interface UpdatePlayerRequestBody {
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
        Height: string;
        position: string;
        dominantHand: string;
    };
}
