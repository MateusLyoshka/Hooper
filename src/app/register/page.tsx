"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { CreatePlayer } from "@/components/API/api";
import { Checkbox } from "@/components/ui/checkbox";


const Register = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [formData, setFormData] = useState({
    nomePlayer: "",
    numeroCelular: "",
    email: "",
    CPF: "",
    password: "",
    confirmPassword: "",
    confirmEmail: "",
    statId: null,
    isAdmin: false
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    setFormData({
      ...formData,
      isAdmin: checked, // Atualiza o campo isAdmin no formData
    });
  };

  const handleRegister = async() => {
    const reponse = await CreatePlayer(formData)
    console.log(reponse)
    router.push("/login")
  }

  return (
    <div className="w-full h-screen justify-center items-center flex">
      <Card className="bg-gray-300 w-[29rem] h-[38rem] flex flex-col">
        <CardHeader className="self-center text-2xl font-semibold">
          Cadastro
        </CardHeader>
        <CardContent className="space-y-6 flex flex-col items-center">
          <div className="w-full mb-4">
            <div className="space-y-6">
              <Input
                className="bg-white rounded-full"
                placeholder="Nome"
                name="nomePlayer"
                value={formData.nomePlayer}
                onChange={handleInputChange}
              />
              <Input
                className="bg-white rounded-full"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Input
                className="bg-white rounded-full"
                placeholder="Confirmar Email"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
              />
              <Input
                className="bg-white rounded-full"
                placeholder="CPF"
                name="CPF"
                value={formData.CPF}
                onChange={handleInputChange}
              />
              <Input
                className="bg-white rounded-full"
                placeholder="Numero de telefone"
                name="numeroCelular"
                value={formData.numeroCelular}
                onChange={handleInputChange}
              />
              <Input
                className="bg-white rounded-full"
                placeholder="Senha"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <Input
                className="bg-white rounded-full"
                placeholder="Confirmar senha"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex">
            <Checkbox
                  checked={isChecked} // Estado associado ao checked
                  onCheckedChange={handleCheckboxChange} // Atualiza isChecked e formData.isAdmin
                />
              <div>Tonar-se gerenciador de partidas</div>
            </div>
          </div>
          <div className="w-full">
            <Button
              className="w-full bg-white text-black hover:bg-gray-100 rounded-sm"
              onClick={handleRegister}
            >
              Cadastrar
            </Button>
            <div className="flex text-sm justify-center mt-2 w-full">
              <p className="">Já possui uma conta?</p>
              <Button
                variant={"link"}
                className="p-0 items-start"
              >
                Faça login
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
