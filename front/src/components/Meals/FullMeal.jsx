import {
 HandThumbUpIcon,
 HandThumbDownIcon,
 ClockIcon,
 TrashIcon,
} from "@heroicons/react/24/solid";
import axios from "../../axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRemoveMeals } from "../../redux/slices/meals";
import { Link } from "react-router-dom";

export const FullMeal = (props) => {
 const [likes, setLikes] = useState(props.likes);
 const [dislikes, setDislikes] = useState(props.dislikes);

 const putLike = () => {
  axios.put(`/like/${props.id}`).then((res) => {
   setLikes(res.data);
  });
 };

 const putDislike = () => {
  axios.put(`/dislike/${props.id}`).then((res) => {
   setDislikes(res.data);
  });
 };

 const dispatch = useDispatch();

 const removeMeal = () => {
  if (window.confirm("You sure you want to delete meal?")) {
   dispatch(fetchRemoveMeals(props.id));
  }
 };
 return (
  <div className="w-full md:w-1/2 p-5 flex flex-col ease-in duration-200 cursor-pointer rounded-lg text-violet-800">
   <img
    src={props.imageUrl}
    alt="No image"
    className="h-[200px] md:h-[300px] object-cover rounded-md"
   />
   <div className="flex justify-between items-center mt-3 border-b-2 border-violet-800">
    <div className="self-center font-semibold text-2xl">{props.title}</div>
    <div className="flex self-center font-semibold text-xl items-center">
     <ClockIcon className="w-6 mr-1" />
     <div>120 min</div>
    </div>
    <div className="flex">
     <div
      onClick={putLike}
      className="flex self-center font-semibold text-xl items-center hover:text-violet-500"
     >
      <HandThumbUpIcon className="w-6 mr-1" />
      <div>{likes}</div>
     </div>

     <div
      onClick={putDislike}
      className="flex self-center font-semibold text-xl items-center ml-3 hover:text-violet-500"
     >
      <HandThumbDownIcon className="w-6 mr-1" />
      <div>{dislikes}</div>
     </div>
    </div>
    {props.isEditable && (
     <a href="/meals">
      <TrashIcon onClick={removeMeal} className="w-6 hover:text-violet-400" />
     </a>
    )}
   </div>
   <div className="text-justify mt-5">{props.text}</div>
  </div>
 );
};
