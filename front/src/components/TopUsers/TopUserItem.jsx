export const TopUserItem = (props) => {
  return (
       <div className="flex justify-between items-center text-lg p-2 hover:bg-violet-300 text-violet-800 rounded-xl">
         <div className="flex items-center">
           <img src={props.avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-2" />
           <div>{props.fullname}</div>
         </div>
         <div>{props.streak}d</div>
       </div>

  );
 };
 