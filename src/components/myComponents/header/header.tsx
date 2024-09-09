import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Header = () => {
    const headerButtons = ["Profile","Your Matches", "Create Match", "Logout"]

    return(
        <div className="w-full h-40 text-white bg-gray-700 flex flex-col items-center justify-center">
            <Link href={"/home"} className="text-5xl font-semibold p-6">Hoops</Link>
            <div className="flex">
            {headerButtons.map((item, index) => (
            <Link
              key={index}
              href={`/home/${item.toLowerCase().replace(" ", '')}`}
              className={cn(buttonVariants({ variant: "ghost" }), "p-8 hover:bg-opacity-5 hover:bg-white hover:text-white rounded-none")}
            >
              {item}
            </Link>
          ))}
        </div>
    </div>
    )
}

export default Header