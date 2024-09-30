import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RankingList() {

    const teams = Array.from({ length: 50 }).map(
        (empity, i) => `Time absurdo ${i+1}`
      )

    return (
      <ScrollArea className="h-48">
        {teams.map((teams, index) =>
        <div key={index}>{teams}</div>
        )}
      </ScrollArea>
    );
}
