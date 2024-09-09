import Footer from "@/components/myComponents/footer/footer";
import Header from "@/components/myComponents/header/header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const userinfo = {
    name: "gado",
};

const games = [
    {
        game:"1", teamA:"A", teamB:"B", mounth:"August", day:"12", year:"2024", time:"18:00", 
    },
    {game:"2", teamA:"C", teamB:"D", mounth:"August", day:"12", year:"2024", time:"21:00"}
]

const recentGame = {teamA:"A", teamB:"B", pointsA:"80", pointsB:"75", score:"22", assists:"5", rebounds:"8"}


const Home = () => {

    return (
      <div className="w-full h-screen">
        <div>
          <Header />
        </div>
        <div>
          <div className="mt-10 p-2">
            <Card className="p-4">
              <CardHeader className="p-3 text-3xl">
                Welcome {userinfo.name}
              </CardHeader>
              <div className="w-full bg-gray-500 h-[1px] opacity-50 mb-4"></div>
              <CardContent>
                <div className="">
                  Get ready to hit the court and track your progress with Hoops.
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 p-2">
            <Card className="p-4">
              <CardHeader className="p-3 text-3xl">Upcoming matches</CardHeader>
              <div className="w-full bg-gray-500 h-[1px] opacity-50 mb-4"></div>
              <CardContent>
                {games.map((itens, index) => (
                  <div key={index} className="mt-2">
                    <div>
                      Game {itens.game}: Team {itens.teamA} vs Team{" "}
                      {itens.teamB} - {itens.mounth} {itens.day}, {itens.year},{" "}
                      {itens.time}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 p-2">
            <Card className="p-4">
              <CardHeader className="p-3 text-3xl">Last status</CardHeader>
              <div className="w-full bg-gray-500 h-[1px] opacity-50 mb-4"></div>
              <CardContent>
                <div className="mt-2">
                  <div className="space-y-1">
                    <div>
                      Last Game: Team {recentGame.teamA} {recentGame.pointsA} vs
                      Team {recentGame.teamB} {recentGame.pointsB}
                    </div>
                    <div>Points Scored: {recentGame.score}</div>
                    <div>Assists: {recentGame.assists}</div>
                    <div>Rebounds: {recentGame.rebounds}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div><Footer/></div>
      </div>
    );
}

export default Home