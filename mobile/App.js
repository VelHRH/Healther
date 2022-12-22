import { StyleSheet, Text, View, Image } from 'react-native';
import { Exercise } from './components/Exercise';

export default function App() {
  return (
    <View>
      <Exercise imageUrl="https://s.alamy.com/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg?fm=jpg" views={500} title="Анжуманя" /> 
    </View>
  );
}
