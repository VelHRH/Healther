import { FlatList, Text, View, Alert } from 'react-native';
import { Exercise } from './components/Exercise';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
    <View>
      <FlatList 
        data={exercises}
        renderItem={({item}) => <Exercise imageUrl="https://s.alamy.com/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg?fm=jpg" views={500} title={item.name} /> }
      />
    </View>
  );
}
