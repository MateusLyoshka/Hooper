import { CreatePlayer, DeletePlayer, GetPlayerById, LoginPlayerApi } from "@/components/API/api";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Player } from "@prisma/client";
import { stat } from "fs";
import jwt from 'jsonwebtoken'; // Import the 'jwt' module
import { Delete } from "lucide-react";
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

  const player = {
    nomePlayer: "aaaaaaaaaaaaa",
    numeroCelular: "+55 11 98765-4322",
    email: "rogeriso.cansi2ss5sexample.com",
    CPF: "98ss7.655a.322s-32",
    password: "senha_forte_aqui",
    confirmPassword: "senha_forte_aqui",
    confirmEmail: "rogerio.ceni@example.com",
    statId: null
  }
  //CreatePlayer(player)

  const email = "rogeriso.cansi2ss5sexample.com"
  const senha = "senha_forte_aqui"
  
const login = async () => {
  const response = await LoginPlayerApi(email, senha)
  console.log("marcos o filho da puta:",response)
}
// login()

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJJZCI6IjVmYzI5MzhlLTc0NWYtNDYwMi05YjM2LWEyMTQ5ODg5ZGU2OCIsImVtYWlsIjoicm9nZXJpc28uY2Fuc2kyc3M1c2V4YW1wbGUuY29tIiwiaWF0IjoxNzI2MDg4NjY0LCJleHAiOjE3MjYwOTIyNjR9.Mrc6w198wiM0VfyczehWf5Vg5-islC9UAj9o7pBQmE8'
const secret_key = 'cococulos'

const decodeToken = () =>{
  const decodedtoken = jwt.verify(token, secret_key);
  console.log('CPF do jogador:', decodedtoken);
}
//decodeToken()

//GetPlayerById("07884de0-c5df-4424-8d13-d6708bd8aa1c")
//DeletePlayer("13538920-92f1-44db-abc9-463af48c765b")

  return (
    <div className="w-full h-screen justify-center items-center flex">
      
    </div>
  );
}
