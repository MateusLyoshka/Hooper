"use client";

import Footer from "@/components/myComponents/footer/footer";
import Header from "@/components/myComponents/header/header";
import { usePathname } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Match = () => {
  const yourgames = {
    teamA: "A",
    teamB: "B",
    id: "oqwkoeas2302aas",
    type: "amistoso",
    local: "SESC CM",
    day: "20",
    mounth: "10",
    year: "2024",
    time: "18:50",
    mode: "5x5",
    court: "aberta",
  };

  // Estados para controlar o cronômetro
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  // Função para iniciar ou pausar o cronômetro
  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  // Função para finalizar a partida
  const handleFinish = () => {
    setIsFinished(true);
    setIsRunning(false);
  };

  const id = usePathname().split("/").pop() as string;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div className="mt-10 p-2">
          <Card className="p-4">
            <CardHeader className="p-3 text-3xl">
              Partida: {yourgames.teamA} vs {yourgames.teamB}
            </CardHeader>
            <div className="w-full bg-gray-500 h-[1px] opacity-50 mb-4"></div>
            <CardContent>
              <div className="space-y-2">
                <div>
                  Jogadores do time {yourgames.teamA}: {}
                </div>
                <div>
                  Jogadores do time {yourgames.teamB}: {}
                </div>
                <div>
                  {yourgames.type}, {yourgames.day}/{yourgames.mounth}/
                  {yourgames.year} {yourgames.time}, {yourgames.mode},{" "}
                  {yourgames.court}.
                </div>
              </div>
              <div className="mt-4">
                {/* Exibe o tempo do cronômetro */}
                <div className="text-2xl">
                  Tempo: {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
                </div>
                <div className="mt-4">
                  {!isFinished ? (
                    <Button
                      onClick={handleStartPause}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      {isRunning ? "Pausar" : "Iniciar"}
                    </Button>
                  ) : null}
                  {isRunning === false && time > 0 && !isFinished ? (
                    <Button
                      onClick={handleFinish}
                      className="bg-red-500 text-white px-4 py-2 rounded ml-4"
                    >
                      Finalizar Partida
                    </Button>
                  ) : null}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Match;
