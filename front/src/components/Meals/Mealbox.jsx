import React from "react";
import { Meal } from "./Meal";
import { useDispatch, useSelector } from "react-redux";

export const Mealbox = () => {
 return (
  <div className="w-full md:w-[50%] flex flex-wrap">
   <Meal
    title="Omelette"
    likes="250"
    dislikes="25"
    imageUrl="https://st.depositphotos.com/3381487/5165/i/950/depositphotos_51659719-stock-photo-ukrainian-soup-borsch.jpg"
   />
  </div>
 );
};
