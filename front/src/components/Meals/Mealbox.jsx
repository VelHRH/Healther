import React from "react";
import { Meal } from "./Meal";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals } from "../../redux/slices/meals";

export const Mealbox = () => {
 const dispatch = useDispatch();
 const { meals } = useSelector((state) => state.meals);

 React.useEffect(() => {
  dispatch(fetchMeals());
 }, []);
 return (
  <div className="w-full md:w-[50%] flex flex-wrap mb-16 md:mb-0">
   {meals.items.map((obj) => (
    <Meal
     title={obj.title}
     likes={obj.likes}
     dislikes={obj.dislikes}
     imageUrl={obj.imageUrl}
    />
   ))}
  </div>
 );
};
