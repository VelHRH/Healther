import { FlatList, Text, View, Alert, StatusBar } from 'react-native';
import { Exercise } from '../components/Exercise';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Nav } from '../components/Nav';
import { Header } from '../components/Header';

export default function Meals({navigation}) {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    axios
    .get("http://192.168.0.106:4444/meals")
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
        renderItem={({item}) => <Exercise key={item._id} imageUrl={item.imageUrl} title={item.title} /> }
      />
      <Nav navigation={navigation} />
      <StatusBar style="light" />
    </View>
  );
}
