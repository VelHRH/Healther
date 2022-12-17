import React from "react";

export const FullProduct = ({ link, name, calories, setOpenedProduct }) => {
 return (
  <>
   <div
    onClick={() => setOpenedProduct(-1)}
    className="fixed left-0 top-0 w-screen h-screen overscroll-none bg-black z-30 opacity-70"
   ></div>
   <div className="fixed left-[50%] top-[50%] translate-x-[-50%] z-40 translate-y-[-50%] bg-sky-100 p-4 rounded-2xl flex flex-col items-center">
    <img src={link} alt={name} className="w-[800px] h-[450px] object-cover" />
    <div className="text-slate-900 font-semibold text-3xl mt-2">{name}</div>
    <div className="flex text-slate-900 font-semibold text-2xl">{calories}</div>
   </div>
  </>
 );
};
