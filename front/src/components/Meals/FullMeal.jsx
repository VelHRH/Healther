import {
 HandThumbUpIcon,
 HandThumbDownIcon,
 ClockIcon,
} from "@heroicons/react/24/solid";
export const FullMeal = (props) => {
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
     <div className="flex self-center font-semibold text-xl items-center hover:text-violet-500">
      <HandThumbUpIcon className="w-6 mr-1" />
      <div>{props.likes}</div>
     </div>
     <div className="flex self-center font-semibold text-xl items-center ml-3 hover:text-violet-500">
      <HandThumbDownIcon className="w-6 mr-1" />
      <div>{props.dislikes}</div>
     </div>
    </div>
   </div>
   <div className="text-justify mt-5">{props.text}</div>
  </div>
 );
};
