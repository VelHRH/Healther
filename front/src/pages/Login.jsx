export function Login() {
 return (
  <div className="bg-gradient-to-r from-violet-500 to-purple-500 w-screen h-screen">
   <div className="flex flex-col px-10 w-11/12 md:w-1/3 left-[50%] top-[50%] absolute bg-slate-100 translate-y-[-50%] items-center translate-x-[-50%] text-xl rounded-xl">
    <div className="my-5 text-2xl">Sing In</div>
    <input
     type="text"
     placeholder="Your email..."
     className="bg-slate-100 w-full border-b-2 border-violet-400 my-5 outline-none focus:border-violet-800"
    ></input>
    <input
     type="password"
     placeholder="Password..."
     className="bg-slate-100 w-full border-b-2 border-violet-400 my-5 outline-none focus:border-violet-800"
    ></input>
    <div className="text-violet-700 cursor-pointer hover:text-black self-start">
     Forgot password?
    </div>
    <div className="bg-violet-700 text-slate-50 p-2 px-5 my-5 w-full ease-in duration-200 text-center rounded-full cursor-pointer hover:bg-transparent hover:text-violet-700 border-2 border-violet-700">
     Login
    </div>
   </div>
  </div>
 );
}
