import { EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
export const Exercise = (props) => {
 return (
  <div className="w-1/2 p-5 flex flex-col ease-in duration-200 cursor-pointer hover:bg-violet-400 rounded-lg text-violet-800">
   <Link to={`/exercises/${props.id}`} className="w-full">
    <img
     src={props.imageUrl}
     alt="No image"
     className="h-[150px] object-cover rounded-md w-full"
    />
    <div className="flex justify-between items-center mt-3">
     <div className="self-center font-semibold text-2xl">{props.title}</div>
     <div className="flex self-center font-semibold text-xl items-center">
      <EyeIcon className="w-6 mr-1" />
      <div>{props.viewsCount}</div>
     </div>
    </div>
   </Link>
  </div>
 );
};
