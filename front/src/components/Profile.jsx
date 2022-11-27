import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";

export const Profile = (props) => {
 const [edit, setEdit] = useState(false);
 const [editText, setEditText] = useState(props.name);
 return (
  <div className="w-full md:w-1/2 flex flex-col items-center mt-2">
   <img
    src={props.avatar}
    alt="Avatar"
    className="w-72 h-72 object-cover rounded-full"
   />
   <div className="flex mb-3 mt-2 text-violet-800 text-4xl font-semibold">
    {edit ? (
     <div className="flex">
      <input
       className="w-52"
       onChange={(e) => setEditText(e.target.value)}
       value={editText}
      />{" "}
      <button
       className="text-slate-50 bg-violet-800 ml-5 p-1 rounded-md"
       onClick={() => {
        setEdit(false);
       }}
      >
       OK
      </button>
     </div>
    ) : (
     <div>{editText}</div>
    )}

    <PencilIcon
     onClick={() => setEdit(true)}
     className="w-8 ml-2 hover:text-violet-400"
    />
   </div>
   <div className="flex items-end cursor-pointer">
    <div className="flex flex-col items-center basis-1/3">
     <div className="text-5xl text-green-600">30</div>
     <div className="bg-green-600 text-slate-50 rounded-md p-1 text-sm">
      MEALS
     </div>
    </div>
    <div className="flex flex-col items-center mx-5 cursor-pointer basis-1/3">
     <div className="text-6xl text-orange-600">{props.streak}</div>
     <div className="bg-orange-600 text-slate-50 rounded-md p-1">STREAK</div>
    </div>
    <div className="flex flex-col items-center cursor-pointer basis-1/3">
     <div className="text-5xl text-cyan-600">1</div>
     <div className="bg-cyan-600 text-slate-50 rounded-md p-1 text-sm">EX.</div>
    </div>
   </div>
  </div>
 );
};
