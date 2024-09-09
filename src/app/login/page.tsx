"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()

  return (
    <div className="w-full h-screen justify-center items-center flex">
      <Card className="bg-gray-300 w-[29rem] h-80 flex flex-col">
        <CardHeader className="self-center text-2xl font-semibold">
          Login
        </CardHeader>
        <CardContent className="space-y-6 flex flex-col items-center">
          <div className="w-full">
            <div className="space-y-6">
              <Input
                className="bg-white rounded-full"
                placeholder="Nome"
              ></Input>
              <Input
                className="bg-white rounded-full"
                placeholder="Senha"
              ></Input>
            </div>
            <div className="w-full flex justify-end">
              <Button variant={"link"} className="">
                Esqueceu sua senha ?
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div>
              <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-sm">
                Entrar
              </Button>
            </div>
            <div className="flex text-sm justify-center mt-2 w-full">
              <p className="">Não tem uma conta ?</p>
              <Button
                variant={"link"}
                className="p-0 items-start"
                onClick={() => router.push("/register")}
              >
                Crie uma
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
