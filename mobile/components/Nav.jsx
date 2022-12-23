import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const NavContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  align-items: center;
  bottom: 20px;
  padding: 10px;
  width: 90%;
  left: 5%;
  background: rgba(91, 33, 182, 0.9);
  border-radius: 60px;
`;

const ExerciseView = styled.View`
  flex-direction: row;
`;

export const Nav = () => {
  return (
    <NavContainer>
      <Pressable android_ripple={{borderless:true, radius:40}}>
        <MaterialCommunityIcons name="numeric-10-box" size={40} color="white" />
      </Pressable>
      <Pressable android_ripple={{borderless:true, radius:40}}>
        <FontAwesome name="calculator" size={30} color="white" />
      </Pressable>
      <Pressable android_ripple={{borderless:true, radius:40}}>
        <MaterialCommunityIcons name="food-turkey" size={40} color="white" />
      </Pressable>
      <Pressable android_ripple={{borderless:true, radius:40}}>
        <FontAwesome name="dollar" size={30} color="white" />
      </Pressable>
    </NavContainer>
  )
}
