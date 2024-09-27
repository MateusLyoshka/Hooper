import { CreatePlayer, LoginPlayerApi } from "@/components/API/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const LoginCard = ({switchTabCard}) => {
  const router = useRouter()

  const loginplayer = async () => {
    const response = await LoginPlayerApi
    console.log(response)
  }

  return (
    <div>
      <form  action={LoginPlayerApi}>
        <Card className="bg-white h-80 flex flex-col ">
          <CardContent className="space-y-6 flex flex-col items-center mt-12">
            <div className="w-full">
              <div className="space-y-6">
                <Input
                  className="bg-white rounded-full"
                  placeholder="Email"
                  id="email"
                  name="email"
                ></Input>
                <Input
                  className="bg-white rounded-full"
                  placeholder="Senha"
                  type="password"
                  id="password"
                  name="password"
                ></Input>
              </div>
              <div className="w-full flex justify-end">
                <Button
                  variant={"link"}
                  className=""
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Esqueceu sua senha ?
                </Button>
              </div>
            </div>
            <div className="w-full">
              <div>
                <Button
                  className="w-full bg-gradient-to-r from-[#FDE806] to-[#F0C907] text-black rounded-sm"
                  type="submit"
                  onClick={() => {loginplayer}}
                >
                  Entrar
                </Button>
              </div>
              <div className="flex text-sm justify-center mt-2 w-full">
                <p className="mr-1">Não tem uma conta ?</p>
                <Button
                  variant={"link"}
                  className="p-0 items-start"
                  onClick={(e) => {
                    e.preventDefault();
                    switchTabCard("signin");
                  }}
                >
                  Crie uma
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export const SigninCard = ({switchTabCard}) => {
  return (
    <div className="">
      <form action={CreatePlayer}>
        <Card className="bg-white flex flex-col">
          <CardContent className="space-y-6 flex flex-col items-center mt-12">
            <div className="w-full">
              <div className=" mb-4">
                <div className="space-y-6">
                  <Input
                    className="bg-white rounded-full"
                    placeholder="Nome"
                    name="name"
                    id="name"
                  />
                  <Input
                    className="bg-white rounded-full"
                    placeholder="Email"
                    name="email"
                    id="email"
                  />
                  <Input
                    className="bg-white rounded-full"
                    placeholder="Senha"
                    type="password"
                    name="password"
                    id="password"
                  />
                  {/* <Input
                      className="bg-white rounded-full"
                      placeholder="Confirmar senha"
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    /> */}
                </div>
                {/* <div className="flex">
                    <Checkbox
                      checked={isChecked} // Estado associado ao checked
                      onCheckedChange={handleCheckboxChange} // Atualiza isChecked e formData.isAdmin
                    />
                    <div>Tonar-se gerenciador de partidas</div>
                  </div> */}
              </div>
              <div className="w-full space-y-2 pt-2">
                <Button className="w-full bg-gradient-to-r from-[#FDE806] to-[#F0C907] text-black rounded-sm">
                  Criar conta
                </Button>
                <div className="justify-center flex">
                  <p>ou</p>
                </div>
                <div className="flex justify-center">
                  <Button
                    className="text-black bg-white border-black hover:bg-white w-full"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <Image
                      height={20}
                      width={20}
                      src="/google-icon-logo.svg"
                      alt={"a"}
                    />
                    <p className="ml-2">Continuar com google</p>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex text-sm justify-center mt-2 w-full">
              <p className="">Já possui uma conta?</p>
              <Button
                variant={"link"}
                className="p-0 items-start ml-1"
                onClick={(e) => {
                  e.preventDefault();
                  switchTabCard("login")
                }}
              >
                Faça login
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};
