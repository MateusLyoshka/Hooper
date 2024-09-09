"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div className="w-full h-screen justify-center items-center flex">
      <Button className="rounded-md" onClick={() => router.push("/login")}>Ir para o login!</Button>
    </div>
  );
}
