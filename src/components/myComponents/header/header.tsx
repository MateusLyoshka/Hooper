"use client"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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
  const headerButtons = profile.matchadm === "true"
    ? ["Profile", "Your Matches", "Create Match", "Logout"]
    : ["Profile", "Your Matches", "Logout"];
  const logout = () => {
    console.log("Logging out...");
    router.push("/login");
  };

  return (
    <div className="w-full h-40 text-white bg-gray-700 flex flex-col items-center justify-center">
      <Link href={"/home"} className="text-5xl font-semibold p-6">
        Hoops
      </Link>
      <div className="flex">
        {headerButtons.map((item, index) =>
          item === "Logout" ? (
            <button
              key={index}
              onClick={logout}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "p-8 hover:bg-opacity-5 hover:bg-white hover:text-white rounded-none"
              )}
            >
              {item}
            </button>
          ) : (
            <Link
              key={index}
              href={`/home/${item.toLowerCase().replace(" ", "")}`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "p-8 hover:bg-opacity-5 hover:bg-white hover:text-white rounded-none"
              )}
            >
              {item}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Header