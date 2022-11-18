import { FullExercise } from "../components/Exercise/FullExercise";
import { Header } from "../components/Header";
import { Navbox } from "../components/Navbox/Navbox";
import { TopUsers } from "../components/TopUsers/TopUsers";

export function ExercisePage() {
 return (
  <>
   <Header />
   <div className="flex mt-20">
    <Navbox />
    <FullExercise
     title="Push-ups"
     text="Begin in prone position on the floor with your arms slightly wider than shoulder width. Arms should be directly under the shoulder with soft elbows. Body in neutral position with even balance throughout both hands and toes Concentric Phase – pushing through the palm of the hands and keeping neutral position. Contact the chest muscles and straighten the arms. Breathing out during the concentric phase. Eccentric phase – slowly lower your body by bending through the elbows and keeping neutral alignment until your chest is almost at the floor. Breathing in as you come down."
     viewsCount={50}
     imageUrl="https://img.championat.com/c/1200x900/news/big/c/n/5-glavnyh-oshibok-v-otzhimanijah-ot-pola_15871378771761917276.jpg"
    />
    <TopUsers />
   </div>
  </>
 );
}
