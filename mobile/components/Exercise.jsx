import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const ExerciseView = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 2px;
  border-bottom-color: rgba(91, 33, 182, 0.5);
  border-bottom-style: solid;
`;

const ExerciseImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 15px;
`;

const ExerciseDetails = styled.View`
  justify-content: center;
  flex: 1;
`;

const ExerciseTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
`;

const ExerciseViews = styled.Text`
  font-weight: 500;
  font-size: 15px;
  color: rgba(91, 33, 182, 0.7);
`;

export const Exercise = ({title, imageUrl, views}) => {
  return (
    <ExerciseView>
      <ExerciseImage source={{uri: imageUrl}} />
      <ExerciseDetails>
        <ExerciseTitle>{title}</ExerciseTitle>
        <ExerciseViews>Views: {views}</ExerciseViews>
      </ExerciseDetails>
    </ExerciseView>
  )
}
