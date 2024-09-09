import Footer from "@/components/myComponents/footer/footer"
import Header from "@/components/myComponents/header/header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const Profile = () => {
    const profile = {avatarid:"", name:"jão arcebispo de souza", email:"arcejão@email.com", phone:"+55 45 99846-3862", position:"Foward", height:"1,85m", dominanthand:"right"}
    const stats = {gamesplayed:"20", points:"180", assists:"20000", rebounds:"75", blocks:"20"}
    return (
      <div className="w-full h-screen">
        <div>
          <Header />
        </div>
        <div>
          <div className="mt-10 p-2">
            <Card className="p-4">
              <CardHeader className="p-3 text-3xl">
                Your Profile {}
              </CardHeader>
              <div className="w-full bg-gray-500 h-[1px] opacity-50 mb-4"></div>
              <CardContent>
                <div className="space-y-2">
                  <div>User avatar</div>
                  <div>Name: {profile.name} </div>
                  <div>Email: {profile.email}</div>
                  <div>Phone: {profile.phone}</div>
                  <div>Position: {profile.position}</div>
                  <div>Height: {profile.height}</div>
                  <div>Dominant Hand: {profile.dominanthand}</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 p-2">
            <Card className="p-4">
              <CardHeader className="p-3 text-3xl">
                Stats {}
              </CardHeader>
              <div className="w-full bg-gray-500 h-[1px] opacity-50 mb-4"></div>
              <CardContent>
                <div className="space-y-2">
                <div>User avatar</div>
                  <div>Games played: {stats.gamesplayed} </div>
                  <div>Points: {stats.points}</div>
                  <div>Assists: {stats.assists}</div>
                  <div>Rebounds: {stats.rebounds}</div>
                  <div>Block: {stats.blocks}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
        <Footer/>
        </div>
      </div>
    );
}

export default Profile