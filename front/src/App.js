import {Routes, Route} from 'react-router-dom'
import { ExercisePage } from "./pages/ExercisePage";
import { MealPage } from "./pages/MealPage";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Meals } from './pages/Meals';
import { MyAccount } from './pages/MyAccount';
import { Register } from "./pages/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {dispatch(fetchAuthMe())},[])
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/exercises/:id' element={<ExercisePage />} />
        <Route path='/meals' element={<Meals />} />
        <Route path='/meals/:id' element={<MealPage />} />
        <Route path='/auth/me' element={<MyAccount />} />
      </Routes>
    </>
  );
}

export default App;