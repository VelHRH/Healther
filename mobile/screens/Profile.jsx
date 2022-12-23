import { FlatList, Text, View, Alert, StatusBar, Button } from 'react-native';
import styled from 'styled-components/native';
import { Nav } from '../components/Nav';
import { Header } from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function Home({navigation}) {

const ProfileContainer = styled.View`
  margin-top: 60px;
`;

const ProfilePicture = styled.Image`
  width: 50%;
  margin-top: 20px;
  border-radius: 30px;
`;

  return (
    <View style={{height: "100%"}}>
      <Header />
      <ProfileContainer style={{flexDirection: "column", alignItems: "center"}}>
        <ProfilePicture style={{aspectRatio: 1/1}} source={{uri: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/itaewon-class_-kim-da-mi-aka-yi-seos-best-style-moments.jpg"}} />
        <Text style={{fontSize: 30, fontWeight: "bold", marginTop: 10}}>Michael Rodin</Text>
        <View style={{flexDirection: "row", marginTop: 10}}>
          <FontAwesome5 name="fire" size={40} color="orange" />
          <Text style={{fontSize: 30, fontWeight: "bold", color: 'orange'}}> 2 days</Text>
        </View>
      </ProfileContainer>
      <Nav navigation={navigation}/>
      <StatusBar style="light" />
    </View>
  );
}
