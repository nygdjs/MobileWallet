import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const ButtonWrapper = styled.TouchableOpacity`
  background-color: papayawhip;
  padding: 20px;
`;

const ButtonLabel = styled.Text`
  color: hotpink;
  font-size: 18px;
`;

const Button = props => (
  <ButtonWrapper onPress={props.onPress}>
    <ButtonLabel>{props.children}</ButtonLabel>
  </ButtonWrapper>
);

export default Button;
