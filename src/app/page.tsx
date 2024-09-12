import { CreatePlayer, DeletePlayer, GetPlayerById, LoginPlayerApi } from "@/components/API/api";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Player } from "@prisma/client";
import { stat } from "fs";
import jwt from 'jsonwebtoken'; // Import the 'jwt' module
import { Delete } from "lucide-react";
import { createGame } from "@/components/API/api";

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
  login()
  
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
  gameName: "Feras do Basquete as Lendas os Feras",
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
  teamAplayers: ["Jogador1", "Jogador2", "Jogador3"],
  teamBplayers: ["Jogador4", "Jogador5", "Jogador6"],
};

// Os Feras do Basquete estão prontos para entrar em quadra! 🏀🔥
console.log("Feras do Basquete criados:", FerasDoBasquete);
//createGame("2846c21c-4732-4f40-8ae7-fa1b16d2f12c", FerasDoBasquete)


  return (
    <div className="w-full h-screen justify-center items-center flex">
      
    </div>
  );
}
