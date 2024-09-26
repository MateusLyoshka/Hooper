
import { LoginPlayerApi } from "@/components/API/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export const LoginCard = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
      const response = await LoginPlayerApi(email, senha);
      console.log(response);
      router.push("/home");
    };

    const router = useRouter();

    return (
      <div>
        <Card className="bg-white h-80 flex flex-col">
          <CardContent className="space-y-6 flex flex-col items-center">
            <div className="w-full">
              <div className="space-y-6">
                <Input
                  className="bg-white rounded-full"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
                <Input
                  className="bg-white rounded-full"
                  placeholder="Senha"
                  onChange={(e) => setSenha(e.target.value)}
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
                <Button
                  className="w-full bg-white text-black hover:bg-gray-100 rounded-sm"
                  onClick={handleLogin}
                >
                  Entrar
                </Button>
              </div>
              <div className="flex text-sm justify-center mt-2 w-full">
                <p className="">Não tem uma conta ?</p>
                <Button variant={"link"} className="p-0 items-start">
                  Crie uma
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
};
