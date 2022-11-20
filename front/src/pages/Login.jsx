import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../redux/slices/auth";

export function Login() {
 const dispatch = useDispatch();
 const {
  register,
  handleSubmit,
  setError,
  formState: { errors, isValid },
 } = useForm({
  defaultValues: {
   email: "",
   password: "",
  },
  mode: "onChange",
 });
 const onSubmit = (values) => {
  console.log(values);
  dispatch(fetchAuth(values));
 };
 return (
  <div className="bg-gradient-to-r from-violet-500 to-purple-500 w-screen h-screen">
   <div className="flex flex-col px-10 w-11/12 md:w-1/3 left-[50%] top-[50%] absolute bg-slate-100 translate-y-[-50%] items-center translate-x-[-50%] text-xl rounded-xl">
    <div className="my-5 text-2xl">Sing In</div>
    <form onSubmit={handleSubmit(onSubmit)}>
     <input
      type="email"
      placeholder="Your email..."
      {...register("email", { required: "Укажите почту" })}
      className={`bg-slate-100 w-full border-b-2 ${
       Boolean(errors.email?.message) ? "text-red-600" : "text-violet-800"
      } ${
       Boolean(errors.email?.message) ? "border-red-600" : "border-violet-400"
      } my-5 outline-none focus:border-violet-800`}
     />

     <input
      type="password"
      placeholder="Password..."
      {...register("password", { required: "Укажите пароль" })}
      className={`bg-slate-100 w-full border-b-2 ${
       Boolean(errors.password?.message) ? "text-red-600" : "text-violet-800"
      } ${
       Boolean(errors.password?.message)
        ? "border-red-600"
        : "border-violet-400"
      } my-5 outline-none focus:border-violet-800`}
     />

     <div className="text-violet-700 cursor-pointer hover:text-black self-start">
      Forgot password?
     </div>
     <button
      type="submit"
      className="bg-violet-700 text-slate-50 p-2 px-5 my-5 w-full ease-in duration-200 text-center rounded-full cursor-pointer hover:bg-transparent hover:text-violet-700 border-2 border-violet-700"
     >
      Login
     </button>
    </form>
   </div>
  </div>
 );
}
