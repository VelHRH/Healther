import { FullExercise } from "../components/Exercise/FullExercise";
import { Header } from "../components/Header";
import { Navbox } from "../components/Navbox/Navbox";
import { TopUsers } from "../components/TopUsers/TopUsers";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";
import { useSelector } from "react-redux";

export function ExercisePage() {
 const [data, setData] = useState();
 const userData = useSelector((state) => state.auth.data);
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
     id={id}
     title={data.title}
     text={data.text}
     viewsCount={data.viewsCount}
     imageUrl={data.imageUrl}
     isEditable={userData?._id === data.user}
    />
    <TopUsers />
   </div>
  </>
 );
}
