import { Header } from "../components/Header";
import { Mealbox } from "../components/Meals/Mealbox";
import { Navbox } from "../components/Navbox/Navbox";
import { TopUsers } from "../components/TopUsers/TopUsers";

export function Meals() {
 return (
  <>
   <Header />
   <div className="flex mt-20">
    <Navbox />
    <Mealbox />
    <TopUsers />
   </div>
  </>
 );
}
