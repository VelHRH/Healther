import { Header } from "../components/Header";
import { Navbox } from "../components/Navbox/Navbox";
import { TopUsers } from "../components/TopUsers/TopUsers";

export function Home() {
 return (
  <>
   <Header />
   <div className="flex mt-20">
    <Navbox />
    <div className="w-[50%] h-[1000px]"></div>
    <TopUsers />
   </div>
  </>
 );
}
