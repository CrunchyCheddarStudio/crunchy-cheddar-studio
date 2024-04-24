import Image from "next/image";
import bg from "../../public/background/home-background.png"
import Cheese from "./models/Cheese";
import RenderModel from "./components/RenderModel";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
     <Image src={bg} alt="background-image" fill className="-z-50 w-full h-full object-cover object-center opacity-25" />
     <div className="w-full h-screen">
        {/* navigation & 3D model */}
        <Navigation />
        <RenderModel>
          <Cheese />
        </RenderModel>
     </div>
    </main>
  );
}