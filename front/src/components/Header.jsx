import { FireIcon, BellAlertIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectIsAuth } from "../redux/slices/auth";

export const Header = () => {
 const dispatch = useDispatch();
 const isLogged = useSelector(selectIsAuth);

 const onClickLogout = () => {
  if (window.confirm("You sure yoy want to log out?")) {
   dispatch(logout());
   window.localStorage.removeItem("token");
  }
 };

 return (
  <div className="w-full flex border-b-4 border-violet-400 h-20 items-center px-[8%] justify-between fixed bg-slate-50 top-0">
   <Link to="/">
    <div className="font-bold text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r to-violet-500 from-violet-800 logo">
     healther
    </div>
   </Link>
   <div className="flex">
    {isLogged && (
     <BellAlertIcon className="w-6 md:w-8 text-red-500 mr-2 md:mr-5 ease-in duration-200 hover:text-red-300" />
    )}
    {isLogged && (
     <div className="flex text-orange-500 ease-in duration-200 hover:text-orange-300 text-lg md:text-2xl cursor-pointer font-semibold items-center mr-3 md:mr-7">
      <FireIcon className="w-6 md:w-8" />
      <div>112</div>
     </div>
    )}

    {isLogged ? (
     <div className="flex items-center">
      <Link to="/auth/me">
       <img
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt="Profile"
        className="w-14 h-14 rounded-[50%] cursor-pointer"
       />
      </Link>
      <div
       onClick={onClickLogout}
       className="border-2 ml-3 border-red-600 p-1 text-sm rounded-md cursor-pointer text-slate-50 bg-red-600 hover:bg-transparent hover:text-red-600 ease-in duration-200"
      >
       Log Out
      </div>
     </div>
    ) : (
     <div className="flex font-semibold cursor-pointer">
      <Link to="/auth/login">
       <div className="border-2 p-2 rounded-md border-transparent hover:bg-violet-600 hover:text-slate-50 ease-in duration-200">
        Sing In
       </div>
      </Link>
      <Link to="/auth/register">
       <div className="border-2 border-violet-600 p-2 rounded-md text-slate-50 bg-violet-600 hover:bg-transparent hover:text-black ease-in duration-200">
        Register
       </div>
      </Link>
     </div>
    )}
   </div>
  </div>
 );
};
