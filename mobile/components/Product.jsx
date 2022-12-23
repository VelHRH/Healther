import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const ProductImage = styled.Image`
  width: 29.5%;
  margin: 2%;
  border-radius: 20px;
`;

export const Product = ({imageUrl}) => {
  return (
    <ProductImage style={{aspectRatio: 1/1}} source={{uri: imageUrl}} />
  )
}
