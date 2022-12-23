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
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-left: 10px;
`;

const HeaderPic = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 15px;
  margin-right: 10px;
`;

export const Header = ({navigation}) => {
  return (
    <Pressable android_ripple={{borderless:true, radius:40}} onPress={() => navigation.navigate("Profile")}>
    <HeaderContainer>
      <HeaderText>Healther</HeaderText>
      <HeaderPic source={{uri: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/itaewon-class_-kim-da-mi-aka-yi-seos-best-style-moments.jpg"}} />
    </HeaderContainer>
    </Pressable>
  )
}