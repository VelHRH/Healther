export const NavItem = (props) => {
  if (!props.isActive){
    return(
      <div className="flex text-lg mt-1 p-2 rounded-lg border-4 border-transparent hover:bg-violet-300 text-slate-600">
        {props.icon}
        <div>{props.text}</div>
      </div>
    );   
  }

  if (props.isActive){
    return(
      <div className="flex text-lg mt-1 bg-violet-300 p-2 rounded-lg border-[3px] border-violet-800 text-violet-800">
        {props.icon}
        <div>{props.text}</div>
      </div>
    );   
  }
}