import { FullExercise } from "../components/Exercise/FullExercise";
import { Header } from "../components/Header";
import { Navbox } from "../components/Navbox/Navbox";
import { TopUsers } from "../components/TopUsers/TopUsers";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";

export function ExercisePage() {
 const [data, setData] = useState();
 const { id } = useParams();
 useEffect(() => {
  axios.get(`/exercises/${id}`).then((res) => {
   setData(res.data);
  });
 }, []);
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
