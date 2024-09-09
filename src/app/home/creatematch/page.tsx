"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CreateMatch = () => {
  const [gameType, setGameType] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [gameMode, setGameMode] = useState("");
  const [court, setCourt] = useState("");
  const [playerSex, setPlayerSex] = useState("");

  const handleCreateMatch = () => {
    const matchData = {
      gameType,
      place,
      date,
      time,
      gameMode,
      court,
      playerSex,
    };
    console.log("Match Data:", matchData);
  };

  return (
    <div className="w-full h-screen justify-center items-center flex">
      <Card className="bg-gray-300 w-[29rem] h-[40rem] flex flex-col">
        <CardHeader className="self-center text-2xl font-semibold p-3">
          Criar jogo
        </CardHeader>
        <CardContent className="space-y-6 flex flex-col items-center">
          <form
            className="w-full mb-4 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateMatch();
            }}
          >
            <div className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="gametype" className="">
                  Tipo do jogo
                </Label>
                <Input
                  id="gametype"
                  className="bg-white rounded-lg"
                  placeholder="Ex: Amistoso"
                  value={gameType}
                  onChange={(e) => setGameType(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="place" className="">
                  Local
                </Label>
                <Input
                  id="place"
                  className="bg-white rounded-lg"
                  placeholder="SESC CM"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="date" className="">
                  Escolha uma data
                </Label>
                <Input
                  id="date"
                  className="bg-white rounded-lg"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="time" className="">
                  Horário
                </Label>
                <Input
                  id="time"
                  className="bg-white rounded-lg"
                  placeholder="Ex: 18:00"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="gamemode" className="">
                  Modo de jogo
                </Label>
                <Input
                  id="gamemode"
                  className="bg-white rounded-lg"
                  placeholder="Ex: 5x5"
                  value={gameMode}
                  onChange={(e) => setGameMode(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="court" className="">
                  Tipo de quadra
                </Label>
                <Input
                  id="court"
                  className="bg-white rounded-lg"
                  placeholder="Ex: Aberta"
                  value={court}
                  onChange={(e) => setCourt(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="playersex" className="">
                  Sexo dos jogadores
                </Label>
                <Input
                  id="playersex"
                  className="bg-white rounded-lg"
                  placeholder="Ex: Misto"
                  value={playerSex}
                  onChange={(e) => setPlayerSex(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              <div>
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 rounded-sm"
                >
                  Criar
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateMatch;
