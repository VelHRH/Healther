import { Exercise } from "./Exercise";

export const Exercisebox = () => {
 return (
  <div className="w-full md:w-[50%] flex flex-wrap">
   <Exercise
    title="Push-ups"
    viewsCount={50}
    imageUrl="https://img.championat.com/c/1200x900/news/big/c/n/5-glavnyh-oshibok-v-otzhimanijah-ot-pola_15871378771761917276.jpg"
   />
   <Exercise
    title="Push-ups"
    viewsCount={50}
    imageUrl="https://img.championat.com/c/1200x900/news/big/c/n/5-glavnyh-oshibok-v-otzhimanijah-ot-pola_15871378771761917276.jpg"
   />
   <Exercise
    title="Push-ups"
    viewsCount={50}
    imageUrl="https://img.championat.com/c/1200x900/news/big/c/n/5-glavnyh-oshibok-v-otzhimanijah-ot-pola_15871378771761917276.jpg"
   />
  </div>
 );
};
