"use client"

import { LogOutPlayer } from "@/components/API/api"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CircleUser, LogOut, Pencil, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { useRef, useState } from "react"

const Header = () => {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current as NodeJS.Timeout);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200); // Ajuste o delay conforme necessário
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
                "p-8 text-base rounded-none hover:bg-white"
              )}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex">
          <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
            <DropdownMenuTrigger asChild>
              <Button className="hover:bg-white space-x-2" variant="ghost" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => e.preventDefault()}>
                <CircleUser className="h-8 w-8" color="#1A32AC"/>
                <p className="text-base">Mateus pereira games</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full p-0 rounded-none" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <DropdownMenuItem className="">
                <Link
                  href={`/home/perfil`}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    " w-full rounded-none border-none p-6 space-x-2 justify-start"
                  )}
                >
                  <User className=""/>
                  <p className="">Perfil</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant={"ghost"}
                  className="w-full rounded-none border-none p-6 space-x-2 justify-start"
                  onClick={logout}
                > 
                  <LogOut/>
                  <p>Sair</p>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="h-1 bg-[#1A32AC]"></div>
    </div>
  );
};

export default Header