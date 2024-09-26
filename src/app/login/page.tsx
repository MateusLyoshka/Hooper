"use client"

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
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { LoginCard } from "@/components/myComponents/loginSignin/logsign";

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleLogin = async () => {
    const response = await LoginPlayerApi(email, senha)
    console.log(response)
    router.push('/home')
  }

  const router = useRouter()

  return (
    <div className="">
      <div className="w-screen flex justify-center">
        <h1 className="absolute mt-40 text-3xl font-semibold">Hoops</h1>
      </div>
      <div className="h-screen justify-center items-center flex">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">SignIn</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <LoginCard/>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
    </div>
  );
}
