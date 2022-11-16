import { Header } from "./components/Header";
import { Navbox } from "./components/Navbox";

function App() {
  return(
    <>
      <Header />
      <div className="flex mt-20">
      
        <Navbox />
        <div className="w-2/5 bg-red-400 h-[1000px]">
         
        </div>
        <div className="w-2/5 bg-blue-500">

        </div>
      </div>
    </>
  );
}

export default App;