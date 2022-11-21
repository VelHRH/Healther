import { FullExercise } from "../components/Exercise/FullExercise";
import { Header } from "../components/Header";
import { Navbox } from "../components/Navbox/Navbox";
import { TopUsers } from "../components/TopUsers/TopUsers";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";

export function ExercisePage() {
 const [data, setData] = useState();
 const [isLoading, setIsLoading] = useState(true);
 const { id } = useParams();
 useEffect(() => {
  setIsLoading(true);
  axios
   .get(`/exercises/${id}`)
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
    <FullExercise
     title={data.title}
     text={data.text}
     viewsCount={data.viewsCount}
     imageUrl={data.imageUrl}
    />
    <TopUsers />
   </div>
  </>
 );
}
