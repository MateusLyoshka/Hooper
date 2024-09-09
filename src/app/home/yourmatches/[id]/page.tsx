"use client"

import Footer from "@/components/myComponents/footer/footer"
import Header from "@/components/myComponents/header/header"
import { usePathname } from "next/navigation"

const Match = () => {
    const yourgames = [{teamA:"A", teamB:"B", id:"oqwkoeas2302aas",type:"amistoso", local:"SESC CM", day:"20", mounth:"10", year:"2024", time:"18:50", mode:"5x5", court:"aberta"},
        {teamA:"C", teamB:"D", id:"oqwkoeas2302a32",type:"amistoso", local:"SESC CM", day:"21", mounth:"10", year:"2024", time:"20:00", mode:"5x5", court:"aberta"}
    ]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const id = usePathname().split('/').pop() as string
    return(
        <div>
            <div><Header/></div>
            <div className="flex flex-grow">

            </div>
            <div><Footer/></div>
        </div>
    )
}

export default Match