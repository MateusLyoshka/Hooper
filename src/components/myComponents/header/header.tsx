"use client"

import { LogOutPlayer } from "@/components/API/api"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter();
  const profile = {
    avatarid: "",
    name: "jão arcebispo de souza",
    email: "arcejão@email.com",
    phone: "+55 45 99846-3862",
    position: "Foward",
    height: "1,85m",
    dominanthand: "right",
    matchadm: "true",
  };

  const headerButtons = ['Minhas partidas', 'Meu time', 'Aprender', 'Sobre']

  const logout = () => {
    LogOutPlayer()
    router.push("/login");
  };

  return (
    <div className="flex flex-col">
      <div className="w-full h-24 text-black bg-white flex items-center justify-around space-x-24">
        <Link href={"/home"} className="text-5xl font-semibold">
          <Image
            height={250}
            width={250}
            src={"/volleyace-full.svg"}
            alt="volleyacelogo"
          />
        </Link>
        <div className="flex">
          {headerButtons.map((item, index) => (
            <Link
              key={index}
              href={`/home/${item.toLowerCase().replace(" ", "")}`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "p-8   rounded-none"
              )}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex">
          <User />
          <p>Bomba</p>
        </div>
      </div>
      <div className="h-1 bg-[#1A32AC]"></div>
    </div>
  );
};

export default Header