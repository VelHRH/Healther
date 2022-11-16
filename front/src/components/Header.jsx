import { FireIcon } from "@heroicons/react/24/solid";

export const Header = () => {
 return (
  <div className="w-full flex border-b-4 border-violet-400 h-20 items-center px-20 justify-between fixed bg-slate-100 top-0">
   <div className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r to-violet-500 from-violet-800 logo">
    healther
   </div>
   <div className="flex">
    <div className="text-orange-500 hover:text-orange-300 flex text-2xl cursor-pointer font-semibold items-center mr-7">
     <FireIcon className="w-8" />
     <div>112</div>
    </div>

    <img
     src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
     alt="Profile"
     className="w-14 rounded-[50%] cursor-pointer"
    />
   </div>
  </div>
 );
};
