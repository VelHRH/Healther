import { FullMeal } from "../components/Meals/FullMeal";
import { Header } from "../components/Header";
import { Navbox } from "../components/Navbox/Navbox";
import { TopUsers } from "../components/TopUsers/TopUsers";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";

export function MealPage() {
 const [data, setData] = useState();
 const [isLoading, setIsLoading] = useState(true);
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
     id={data._id}
     title={data.title}
     text={data.recipe}
     likes={data.likes.length - 1}
     dislikes={data.dislikes.length - 1}
     imageUrl={data.imageUrl}
    />
    <TopUsers />
   </div>
  </>
 );
}
