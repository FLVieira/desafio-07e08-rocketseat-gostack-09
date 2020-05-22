import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: 80px;
  align-items: center;
  background-color: #0b0b0b;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 20px;
  background: #0b0b0b;
`;

export const Product = styled.View`
  background-color: #fff;
  border: 1px solid #7159c1;
  border-radius: 4px;
  margin: 0 6px;
  padding: 0px 5px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 180px;
  max-height: 300px;
`;

export const ProductItself = styled.View`
  padding: 10px;
`;

export const ProductImage = styled.Image`
  height: 150px;
  width: 150px;
`;

export const ProductInfo = styled.View``;

export const ProductTitle = styled.Text`
  font-size: 10px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 13px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const AddToCartButton = styled(RectButton)`
  width: 180px;
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  padding: 0px 5px;
  margin-top: auto;

  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const AddToCartIcon = styled.View`
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const AddToCartText = styled.Text`
  font-size: 10px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;
