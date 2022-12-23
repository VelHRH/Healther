import { FlatList, Text, View, Alert, StatusBar, Button } from 'react-native';
import { Product } from '../components/Product';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Nav } from '../components/Nav';
import { Header } from '../components/Header';

export default function Home({navigation}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
    .get("http://192.168.0.106:4444/products")
    .then(({data}) => {setProducts(data)})
    .catch((err) => {
      console.log(err);
      Alert.alert("Error", "Unable to load");
    });
  }, []);
  let numColumns=3;
  return (
    <View style={{height: "100%"}}>
      <Header />
      <FlatList
        style={{marginTop: 60}}
        numColumns={numColumns}
        data={products}
        renderItem={({item}) => <Product key={item._id} imageUrl={item.imageUrl} /> }
      />
      <Nav navigation={navigation} />
      <StatusBar style="light" />
    </View>
  );
}
