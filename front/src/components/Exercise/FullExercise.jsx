import {
 EyeIcon,
 ClockIcon,
 ArrowPathIcon,
 TrashIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { fetchRemoveExercises } from "../../redux/slices/exercises";
import { Link } from "react-router-dom";

export const FullExercise = (props) => {
 const dispatch = useDispatch();
 const removeEx = () => {
  if (window.confirm("You sure you want to delete exercise?")) {
   dispatch(fetchRemoveExercises(props.id));
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
     <div>10</div>
    </div>
    <div className="flex self-center font-semibold text-xl items-center">
     <ArrowPathIcon className="w-6 mr-1" />
     <div>5</div>
    </div>
    <div className="flex self-center font-semibold text-xl items-center">
     <EyeIcon className="w-6 mr-1" />
     <div>{props.viewsCount}</div>
    </div>
    {props.isEditable && (
     <Link to="/">
      <TrashIcon onClick={removeEx} className="w-6 hover:text-violet-400" />
     </Link>
    )}
   </div>
   <div className="text-justify mt-5">{props.text}</div>
  </div>
 );
};
