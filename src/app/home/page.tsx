import Footer from "@/components/myComponents/footer/footer";
import Header from "@/components/myComponents/header/header";
import RankingList from "@/components/myComponents/rankinglist/list";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const userinfo = {
  name: "gado",
};

const games = [
  {
    game: "1",
    teamA: "A",
    teamB: "B",
    mounth: "August",
    day: "12",
    year: "2024",
    time: "18:00",
  },
  {
    game: "2",
    teamA: "C",
    teamB: "D",
    mounth: "August",
    day: "12",
    year: "2024",
    time: "21:00",
  },
];

const recentGame = {
  teamA: "A",
  teamB: "B",
  pointsA: "80",
  pointsB: "75",
  score: "22",
  assists: "5",
  rebounds: "8",
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Header />
      </div>

      <div className="flex-grow p-2 flex ml-28 mt-20 ">
        <div className="flex flex-col w-full">
          <div className=" mb-20">
            <div>
              <p className="text-2xl font-medium">Meus times</p>
            </div>
            <div className="w-full flex flex-col items-center space-y-2 mt-20 justify-center">
              <Button className="bg-[#F2CB05] text-black p-6">
                Procurar time
              </Button>
              <p>Não tem um time ainda ? entre em um!</p>
            </div>
          </div>
          <div className="flex w-full flex-col mb-6">
            <div>
              <p className="text-2xl">Ranking global</p>
            </div>
            <div className="flex flex-row mt-36 justify-center space-x-20">
              <div className="flex items-end space-x-10">
                <div className=" bg-[#F2CB05] w-24 h-32 shadow-md"></div>
                <div className=" bg-[#F2CB05] w-24 h-44 shadow-md"></div>
                <div className=" bg-[#F2CB05] w-24 h-24 shadow-md"></div>
              </div>
              <div className="">
                <RankingList />
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-2xl">Times regionais</p>
            </div>
            <div className="mt-20"></div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
