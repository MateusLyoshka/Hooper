import { addStatsMatchOver, CreatePlayer, deleteGame, DeletePlayer, GetPlayerById, joinTeamA, joinTeamB, LoginPlayerApi, removePlayerFromTeamA, updateStats } from "@/components/API/api";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Player } from "@prisma/client";
import { stat } from "fs";
import jwt from 'jsonwebtoken'; // Import the 'jwt' module
import { Delete } from "lucide-react";
import { createGame } from "@/components/API/api";
import { join } from "path";

export default function Home() {
  type player2 = {
    nomePlayer: string;
    numeroCelular: string;
    email: string;
    CPF: string;
    password: string;
    confirmPassword: string;
    confirmEmail: string;
    statId: string | null;
  }

  const neymar = {
    nomePlayer: "Neymar da Silva Santos Júnior",
    numeroCelular: "+55 11 98765-4322",
    email: "neymar@psg.com",
    CPF: "123.456.789-10",
    password: "Neymar10",
    confirmPassword: "Neymar10",
    confirmEmail: "neymar@psg.com",
    isAdmin   : true,
    statId: null,
  };
  
  // Agora temos o Neymar virtual! 🤩
  //console.log("Neymar criado:", neymar);
  //CreatePlayer(neymar)
  
  const hernaneBrocador = {
    nomePlayer: "Hernane da Silva",
    numeroCelular: "+55 21 98765-4321",
    email: "brocador@flamengo.com",
    CPF: "987.654.321-00",
    password: "Gols123",
    confirmPassword: "Gols123",
    confirmEmail: "brocador@flamengo.com",
    isAdmin   : true,
    statId: null,
  };
  
  // Hernane Brocador está pronto para entrar em campo! ⚽🔥
  //console.log("Hernane Brocador criado:", hernaneBrocador);
  //CreatePlayer(hernaneBrocador)
  
  const bomboide = {
    nomePlayer: "Bomboide da Silva",
    numeroCelular: "+55 99 12345-6789",
    email: "bomboide@lendas.com",
    CPF: "111.222.333-44",
    password: "Golazo123",
    confirmPassword: "Golazo123",
    confirmEmail: "bomboide@lendas.com",
    statId: null,
  };
  
  // Bomboide está pronto para entrar em campo (ou na nossa imaginação)! ⚽🌟
  //console.log("Bomboide criado:", bomboide);
  //CreatePlayer(bomboide)
  
  
  const email = "filipi@email.com"
  const senha = "filipi@email.com"
  
  const login = async () => {
    const response = await LoginPlayerApi(email, senha)
    console.log("marcos o filho da puta:",response)
  }
  //login()
  
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJJZCI6IjVmYzI5MzhlLTc0NWYtNDYwMi05YjM2LWEyMTQ5ODg5ZGU2OCIsImVtYWlsIjoicm9nZXJpc28uY2Fuc2kyc3M1c2V4YW1wbGUuY29tIiwiaWF0IjoxNzI2MDg4NjY0LCJleHAiOjE3MjYwOTIyNjR9.Mrc6w198wiM0VfyczehWf5Vg5-islC9UAj9o7pBQmE8'
  const secret_key = 'cococulos'
  
  const decodeToken = () =>{
    const decodedtoken = jwt.verify(token, secret_key);
    console.log('CPF do jogador:', decodedtoken);
  }
  //decodeToken()
  
//DeletePlayer("68a59dce-4304-4074-9707-26801a5e8a57")
//GetPlayerById("07884de0-c5df-4424-8d13-d6708bd8aa1c")

const FerasDoBasquete = {
  gameName: "novo jogo",
  startTime: new Date(),
  teamA: "Time A",
  teamB: "Time B",
  type: "Amistoso",
  mode: "5x5",
  court: "Quadra Central",
  matchDuration: 60, // Duração da partida em minutos
  matchOver: false, // A partida ainda não terminou
  gameDate: "12/09/2024", // Data da partida

  // Jogadores (substitua pelos jogadores reais)
  teamAplayers: [],
  teamBplayers: [],
};

// Os Feras do Basquete estão prontos para entrar em quadra! 🏀🔥
//console.log("Feras do Basquete criados:", FerasDoBasquete);
//createGame("2a642e8b-49c5-42f0-9ecf-5fe94f8d7c3e", FerasDoBasquete)


//joinTeamA("aba013b0-ffe4-4200-9bf9-afb00f4fb9a8","51776743-4060-4a3e-8ba0-924ada36b627")
//joinTeamB("329f53e0-6060-400c-b1e7-5402f4d09eb1","fca069a5-327b-4ce5-81c1-a4c9a17a5d18")
//deleteGame("26e8bdac-f826-4c11-80e4-2e7c9422b882")
//removePlayerFromTeamA("aba013b0-ffe4-4200-9bf9-afb00f4fb9a8","51776743-4060-4a3e-8ba0-924ada36b627")
const PlayerStats = {
  gamesplayed: 10,
  gameswon: 5,
  points: 100,
  assists: 50,
  rebounds: 30,
  blocks: 20,


};

//updateStats("aba013b0-ffe4-4200-9bf9-afb00f4fb9a8", PlayerStats)

addStatsMatchOver("2a642e8b-49c5-42f0-9ecf-5fe94f8d7c3e", "aba013b0-ffe4-4200-9bf9-afb00f4fb9a8", PlayerStats)



  return (
    <div className="w-full h-screen justify-center items-center flex">
      
    </div>
  );
}
