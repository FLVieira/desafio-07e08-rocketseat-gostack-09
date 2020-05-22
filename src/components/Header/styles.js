import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #0b0b0b;
  max-height: 80px;
  padding: 12px;
`;

export const Logo = styled.TouchableOpacity`
  margin-top: 0px;
`;

export const Cart = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 40px;
`;

export const CartText = styled.Text`
  color: #fff;
`;
