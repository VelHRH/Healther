import { FlatList, Text, View, Alert, StatusBar } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Nav } from '../components/Nav';
import { Header } from '../components/Header';
import { Meal } from '../components/Meal';

export default function Meals({navigation}) {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
    .get("http://192.168.0.106:4444/meals")
    .then(({data}) => {setMeals(data)})
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
        data={meals}
        renderItem={({item}) => <Meal key={item._id} imageUrl={item.imageUrl} title={item.title} likes={item.likes.length} dislikes={item.dislikes.length} /> }
      />
      <Nav navigation={navigation} />
      <StatusBar style="light" />
    </View>
  );
}
