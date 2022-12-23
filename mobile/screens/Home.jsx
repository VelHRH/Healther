import { FlatList, Text, View, Alert, StatusBar, Button } from 'react-native';
import { Exercise } from '../components/Exercise';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Nav } from '../components/Nav';
import { Header } from '../components/Header';

export default function Home({navigation}) {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    axios
    .get("http://192.168.0.106:4444/exercises")
    .then(({data}) => {setExercises(data);})
    .catch((err) => {
      console.log(err);
      Alert.alert("Error", "Unable to load");
    });
  }, []);

  return (
    <View style={{height: "100%"}}>
      <Header />
      <FlatList
        style={{marginTop: 60}}
        data={exercises}
        renderItem={({item}) => <Exercise key={item._id} imageUrl={item.imageUrl} views={item.viewsCount} title={item.title} /> }
      />
      <Nav navigation={navigation} />
      <StatusBar style="light" />
    </View>
  );
}
