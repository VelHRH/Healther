export const NavItem = (props) => {
 if (!props.isActive) {
  return (
   <div className="flex text-lg md:mt-1 md:p-2 rounded-lg ease-in duration-200 md:border-4 border-transparent md:hover:bg-violet-300 text-slate-600">
    {props.icon}
    <div>{props.text}</div>
   </div>
  );
 }

 if (props.isActive) {
  return (
   <div className="flex text-lg md:mt-1 md:bg-violet-300 md:p-2 rounded-lg md:border-[3px] border-violet-800 text-violet-800">
    {props.icon}
    <div>{props.text}</div>
   </div>
  );
 }
};
