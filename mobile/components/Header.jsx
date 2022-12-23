import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const HeaderContainer = styled.View`
  position: absolute;
  width: 100%;
  padding: 10px;
  background: rgba(91, 33, 182, 0.9);
  top: 0px;
`;

const HeaderText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-left: 10px;
`;

export const Header = () => {
  return (
    <HeaderContainer><HeaderText>Healther</HeaderText></HeaderContainer>
  )
}