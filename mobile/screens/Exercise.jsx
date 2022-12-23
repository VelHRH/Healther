import { FlatList, Text, View, Alert, StatusBar, Button } from 'react-native';
import { FullExercise } from '../components/FullExercise';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Nav } from '../components/Nav';
import { Header } from '../components/Header';

export default function Home({navigation, route}) {
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    axios
    .get(`http://192.168.0.106:4444/exercises/${route.params._id}`)
    .then(({data}) => {setExercise(data);})
    .catch((err) => {
      console.log(err);
      Alert.alert("Error", "Unable to load");
    });
  }, []);

  return (
    <View style={{height: "100%"}}>
      <Header />
      <FullExercise imageUrl={exercise.imageUrl} text={exercise.text} title={exercise.title} />
      <Nav navigation={navigation}/>
      <StatusBar style="light" />
    </View>
  );
}
