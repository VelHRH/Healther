import React from "react";

export const Button = ({ isActive }) => {
 return (
  <button
   className={`mx-3 py-2 border-4 text-2xl mt-3 font-semibold transition duration-300 ease-in-out rounded-full ${
    isActive
     ? "border-violet-800 text-violet-800 hover:bg-violet-800 hover:text-slate-50"
     : "text-slate-400 border-slate-400"
   }`}
  >
   Calculate calories
  </button>
 );
};
