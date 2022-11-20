import React from "react";
import { Exercise } from "./Exercise";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../../redux/slices/exercises";

export const Exercisebox = () => {
 const dispatch = useDispatch();
 const { exercises, tags } = useSelector((state) => state.exercises);

 React.useEffect(() => {
  dispatch(fetchExercises());
 }, []);
 return (
  <div className="w-full md:w-[50%] flex flex-wrap mb-16 md:mb-0">
   {exercises.items.map((obj) => (
    <Exercise
     title={obj.title}
     viewsCount={obj.viewsCount}
     imageUrl={obj.imageUrl}
    />
   ))}
  </div>
 );
};
