import Footer from "@/components/myComponents/footer/footer";
import Header from "@/components/myComponents/header/header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const YourMatches = () => {
    const yourgames = [{teamA:"A", teamB:"B", id:"oqwkoeas2302aas",type:"amistoso", local:"SESC CM", day:"20", mounth:"10", year:"2024", time:"18:50", mode:"5x5", court:"aberta"},
        {teamA:"C", teamB:"D", id:"oqwkoeas2302a32",type:"amistoso", local:"SESC CM", day:"21", mounth:"10", year:"2024", time:"20:00", mode:"5x5", court:"aberta"}
    ]
    const gamessubscribed = [{teamA:"Bomba", teamB:"Bogas", id:"oqwkoeas2302a32",type:"amistoso", local:"SESC CM", day:"28", mounth:"10", year:"2024", time:"20:00", mode:"5x5", court:"aberta"}]
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow mt-10 p-2">
          <Card className="p-4">
            <CardHeader className="p-3 text-3xl">Your games{}</CardHeader>
            <div className="w-full bg-gray-500 h-[1px] opacity-50 mb-4"></div>
            <CardContent>
              {yourgames.map((itens, index) => (
                <Link key={index} href={`/home/yourmatches/${itens.id}`}>
                  <div className="mt-2">Game {index+1}: Time {itens.teamA} vs Time {itens.teamB} - {itens.type}, {itens.day}/{itens.mounth}/{itens.year} {itens.time}, {itens.mode}, {itens.court}. </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="flex-grow mt-10 p-2">
          <Card className="p-4">
            <CardHeader className="p-3 text-3xl">Subscribed Games{}</CardHeader>
            <div className="w-full bg-gray-500 h-[1px] opacity-50 mb-4"></div>
            <CardContent>
              {gamessubscribed.map((itens, index) => (
                <Link key={index} href={`/home/yourmatches/${itens.id}`}>
                  <div className="mt-2">Game {index+1}: Time {itens.teamA} vs Time {itens.teamB} - {itens.type}, {itens.day}/{itens.mounth}/{itens.year} {itens.time}, {itens.mode}, {itens.court}. </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
};

export default YourMatches;
