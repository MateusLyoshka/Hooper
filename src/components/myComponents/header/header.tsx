import { Button } from "@/components/ui/button"

const Header = () => {
    const headerButtons = ["Profile", "Games", "Logout"]

    return(
        <div className="w-full h-36 text-white bg-gray-700 flex flex-col items-center justify-center">
            <div className="text-5xl font-semibold">Hoops</div>
            <div className="flex">
                {headerButtons.map((item, index) => (
                    <div key={index} className="flex">
                        <Button className=" hover:bg-gray-800 hover:text-white border-none rounded-none w-20 mt-4" variant={"ghost"}>{item}</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header