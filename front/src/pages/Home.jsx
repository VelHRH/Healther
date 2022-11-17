import { Exercisebox } from "../components/Exercise/Exercisebox";
import { Header } from "../components/Header";
import { Navbox } from "../components/Navbox/Navbox";
import { TopUsers } from "../components/TopUsers/TopUsers";

export function Home() {
 return (
  <>
   <Header />
   <div className="flex mt-20">
    <Navbox />
    <Exercisebox />
    <TopUsers />
   </div>
  </>
 );
}
