import Home from "./screens/Home";
import Meals from "./screens/Meals";
import Products from "./screens/Products";
import Exercise from "./screens/Exercise";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen 
          name="Meals"
          component={Meals}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen 
          name="Products"
          component={Products}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen 
          name="FullExercise"
          component={Exercise}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen 
          name="Profile"
          component={Profile}
          options={{headerShown: false, animation: 'none'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
