import { FullMeal } from "../components/Meals/FullMeal";
import { Header } from "../components/Header";
import { Navbox } from "../components/Navbox/Navbox";
import { TopUsers } from "../components/TopUsers/TopUsers";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";
import { useSelector } from "react-redux";

export function MealPage() {
 const [data, setData] = useState();
 const [isLoading, setIsLoading] = useState(true);
 const userData = useSelector((state) => state.auth.data);
 const { id } = useParams();
 useEffect(() => {
  setIsLoading(true);
  axios
   .get(`/meals/${id}`)
   .then((res) => {
    setData(res.data);
   })
   .finally(() => setIsLoading(false));
 }, []);
 if (isLoading) {
  return <div>Loading...</div>;
 }
 return (
  <>
   <Header />
   <div className="flex mt-20">
    <Navbox />
    <FullMeal
     id={id}
     title={data.title}
     text={data.recipe}
     likes={data.likes.length}
     dislikes={data.dislikes.length}
     imageUrl={data.imageUrl}
     isEditable={userData?._id === data.user}
    />
    <TopUsers />
   </div>
  </>
 );
}
