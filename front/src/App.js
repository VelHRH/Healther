import {Routes, Route} from 'react-router-dom'
import { ExercisePage } from "./pages/ExercisePage";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/exercises/:id' element={<ExercisePage />} />
      </Routes>
    </>
  );
}

export default App;