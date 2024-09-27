"use client"


import { motion} from 'framer-motion';
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { LoginCard, SigninCard } from "@/components/myComponents/loginSignin/logsign";
import Image from "next/image";
import { useState } from 'react';

export default function Login() {
  const [isAnimationComplete, setAnimationComplete] = useState(false);
  const [activeTab, setActiveTab] = useState("login"); // Estado para controlar a aba ativa

  const switchTab = (tab:string) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      <div className="w-screen flex justify-center items-center mt-28 absolute">
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -300, rotate: 0, filter: "blur(2px)" }}
            animate={{
              opacity: 1,
              x: -2,
              rotate: [0, 360, 360],
              filter: "blur(0px)",
            }} // Definindo keyframes para rotação
            transition={{
              duration: 1,
              times: [0, 1, 1],
              opacity: { duration: 0.3 },
              filter: { duration: 0.5 },
            }}
            onAnimationComplete={() => {
              setTimeout(() => {
                setAnimationComplete(true);
              }, 1500); 
            }}
            className="absolute ml-[126px]"
          >
            <div className="">
              <Image
                className={isAnimationComplete ? 'opacity-0' : 'opacity-1'}
                height={140}
                width={142}
                src="/volleyace ball.svg"
                alt="Bola de vôlei"
              />
            </div>
          </motion.div>
          <div className="">
          <Image
             className='animate-fade-logo'
             height={450}
             width={450}
             src="/volleyace full.svg"
             alt="Bola de vôlei"
             />
          </div>
        </div>
      </div>
      <div className="h-screen justify-center items-center flex animate-fade-up">
        <Tabs value={activeTab} className="w-[400px]" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="login"
              className="bg-[#1a32acff] text-white data-[state=active]:bg-[#222E73] data-[state=active]:text-white hover:bg-[#222E73]"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signin"
              className="bg-[#1a32acff] text-white data-[state=active]:bg-[#222E73] data-[state=active]:text-white hover:bg-[#222E73]"
            >
              Sign in
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="">
            <LoginCard switchTabCard={switchTab}/>
          </TabsContent>
          <TabsContent value="signin" className="">
            <SigninCard switchTabCard={switchTab}/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
