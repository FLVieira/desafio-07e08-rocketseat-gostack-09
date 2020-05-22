import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Background = styled.View`
  margin-top: 80px;
  height: 100%;
  background: #0b0b0b;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  background: #fff;
  border-radius: 5px;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1,
})``;

export const Product = styled.View`
  padding: 15px;
`;

export const ProductItself = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProductInfo = styled.View`
  flex-direction: column;
  max-width: 50%;
  margin: 0 10px 0 15px;
`;

export const ProductQuantityAndTotal = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  padding: 7px;
  border-radius: 4px;
`;
export const ProductQuantity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled(RectButton)`
  background: transparent;
  border: 0;
  padding: 6px;
`;
export const Input = styled.TextInput`
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 4px;
  color: black;
  padding: 6px;
  width: 40px;
  height: 35px;
`;

export const TotalContainer = styled.View`
  align-items: center;
`;

export const OrderButton = styled(RectButton)`
  margin: 15px 0px 10px 0px;
  padding: 10px;
  width: 90%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: #7159c1;
  border: 0;
  border-radius: 4px;
`;
