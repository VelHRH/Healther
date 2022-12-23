import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const ExerciseView = styled.View`
  width: 100%;
  padding: 15px;
  margin-top: 60px;
`;

const ExerciseImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 2px;
  margin-bottom: 10px;
`;

const ExerciseTitle = styled.Text`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
`;

const ExerciseText = styled.Text`
  font-weight: 500;
  font-size: 20px;
  text-align: justify;
`;

export const FullExercise = ({title, imageUrl, text}) => {
  return (
    <ExerciseView>
      <ExerciseTitle>{title}</ExerciseTitle>
      <ExerciseImage source={{uri: imageUrl}} />
      <ExerciseText>{text}</ExerciseText>
    </ExerciseView>
  )
}
