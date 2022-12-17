import {
 CalculatorIcon,
 ShoppingBagIcon,
 CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { NavItem } from "./NavItem";
import { Link, useLocation } from "react-router-dom";

export const Navbox = () => {
 const loc = useLocation();
 const isActive10 = () => {
  if (loc.pathname === "/" || loc.pathname.slice(0, 10) === "/exercises") {
   return true;
  }
  return false;
 };
 const isActiveCalc = () => {
  if (loc.pathname.slice(0, 11) === "/calculator") {
   return true;
  }
  return false;
 };
 const isActiveDishes = () => {
  if (loc.pathname.slice(0, 6) === "/meals") {
   return true;
  }
  return false;
 };
 const isActivePrime = () => {
  if (loc.pathname.slice(0, 6) === "/prime") {
   return true;
  }
  return false;
 };
 return (
  <>
   <div className="hidden md:block w-1/5">
    <div className={`w-[12%] fixed top-24 left-[8%] font-semibold`}>
     <Link to="/">
      <NavItem
       icon={<div className="text-3xl mr-3 select-none">10</div>}
       text="Exercises"
       isActive={isActive10()}
      />
     </Link>
     <Link to="/calculator">
      <NavItem
       icon={<CalculatorIcon className="w-7 mr-3" />}
       text="Calc"
       isActive={isActiveCalc()}
      />
     </Link>
     <Link to="/meals">
      <NavItem
       icon={<ShoppingBagIcon className="w-7 mr-3" />}
       text="Dishes"
       isActive={isActiveDishes()}
      />
     </Link>
     <Link to="/prime">
      <NavItem
       icon={<CurrencyDollarIcon className="w-7 mr-3" />}
       text="Premium"
       isActive={isActivePrime()}
      />
     </Link>
    </div>
   </div>
   <div className="md:hidden">
    <div
     className={`w-full h-16 fixed bottom-0 flex justify-around bg-slate-50 border-t-[3px] border-violet-400 items-center`}
    >
     <Link to="/">
      <NavItem
       icon={<div className="text-3xl select-none">10</div>}
       isActive={isActive10()}
      />
     </Link>
     <Link to="/calculator">
      <NavItem
       icon={<CalculatorIcon className="w-7" />}
       isActive={isActiveCalc()}
      />
     </Link>
     <Link to="/meals">
      <NavItem
       icon={<ShoppingBagIcon className="w-7" />}
       isActive={isActiveDishes()}
      />
     </Link>
     <Link to="/prime">
      <NavItem
       icon={<CurrencyDollarIcon className="w-7" />}
       isActive={isActivePrime()}
      />
     </Link>
    </div>
   </div>
  </>
 );
};
