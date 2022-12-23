import { FlatList, Text, View, Alert, StatusBar } from 'react-native';
import { Exercise } from './components/Exercise';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';

export default function App() {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    axios
    .get("https://63a455a4821953d4f2b15c62.mockapi.io/exercises")
    .then(({data}) => setExercises(data))
    .catch((err) => {
      console.log(err);
      Alert.alert("Error", "Unable to load");
    });
  }, []);

  return (
    <View style={{height: "100%", backgroundColor:"red"}}>
      <FlatList 
        data={exercises}
        renderItem={({item}) => <Exercise imageUrl={item.imageUrl} views={item.viewsCount} title={item.title} /> }
      />
      <MaterialCommunityIcons name="numeric-10-box" size={34} color="black" />
      <Nav />
      <StatusBar style="light" />
    </View>
  );
}
