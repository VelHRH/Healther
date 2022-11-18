import {
 RocketLaunchIcon,
 CalculatorIcon,
 ShoppingBagIcon,
 CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { NavItem } from "./NavItem";

export const Navbox = () => {
 return (
  <>
   <div className="hidden md:block w-1/5">
    <div
     className={`w-[12%] fixed top-24 left-[8%] cursor-pointer font-semibold`}
    >
     <NavItem
      icon={<div className="text-3xl mr-3 select-none">10</div>}
      text="Exercises"
      isActive={true}
     />
     <NavItem
      icon={<CalculatorIcon className="w-7 mr-3" />}
      text="Calc"
      isActive={false}
     />
     <NavItem
      icon={<ShoppingBagIcon className="w-7 mr-3" />}
      text="Dishes"
      isActive={false}
     />
     <NavItem
      icon={<CurrencyDollarIcon className="w-7 mr-3" />}
      text="Premium"
      isActive={false}
     />
    </div>
   </div>
   <div className="md:hidden">
    <div
     className={`w-full h-16 fixed bottom-0 flex justify-around bg-slate-50 border-t-[3px] border-violet-400`}
    >
     <NavItem
      icon={<div className="text-3xl select-none">10</div>}
      isActive={true}
     />
     <NavItem icon={<CalculatorIcon className="w-7" />} isActive={false} />
     <NavItem icon={<ShoppingBagIcon className="w-7" />} isActive={false} />
     <NavItem icon={<CurrencyDollarIcon className="w-7" />} isActive={false} />
    </div>
   </div>
  </>
 );
};
