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
   <div className="hidden md:block">
    <div
     className={`w-[12%] fixed top-24 left-[8%] cursor-pointer font-semibold`}
    >
     <NavItem
      icon={<RocketLaunchIcon className="w-7 mr-3" />}
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
    <div className="w-1/5 "></div>
   </div>
   <div className="md:hidden">
    <div
     className={`w-full h-16 fixed bottom-0 flex justify-around bg-slate-50 border-t-[3px] border-violet-400`}
    >
     <NavItem icon={<RocketLaunchIcon className="w-7" />} isActive={true} />
     <NavItem icon={<CalculatorIcon className="w-7" />} isActive={false} />
     <NavItem icon={<ShoppingBagIcon className="w-7" />} isActive={false} />
     <NavItem icon={<CurrencyDollarIcon className="w-7" />} isActive={false} />
    </div>
   </div>
  </>
 );
};
