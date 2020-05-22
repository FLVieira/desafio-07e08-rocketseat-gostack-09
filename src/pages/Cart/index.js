import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { formatPrice } from '../../util/format';
import {
  Background,
  Container,
  ProductList,
  Product,
  ProductItself,
  ProductImage,
  ProductInfo,
  ProductQuantityAndTotal,
  ProductQuantity,
  Button,
  Input,
  TotalContainer,
  OrderButton,
} from './styles';
import * as cartActions from '../../store/modules/cart/actions';

export default function Cart() {
  const dispatch = useDispatch();

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  function increment(product) {
    dispatch(cartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(cartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Background>
      <Container>
        <ProductList
          data={cart}
          keyExtractor={(product) => product.key}
          renderItem={({ item }) => (
            <Product key={Math.random()}>
              <ProductItself>
                <ProductImage source={{ uri: item.image }} />
                <ProductInfo>
                  <Text style={{ fontSize: 17 }}>{item.title}</Text>
                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                    {item.priceFormatted}
                  </Text>
                </ProductInfo>
                <TouchableOpacity
                  onPress={() => dispatch(cartActions.removeFromCart(item.id))}
                >
                  <Icon name="delete-forever" size={35} color="#7159C1" />
                </TouchableOpacity>
              </ProductItself>

              <ProductQuantityAndTotal>
                <ProductQuantity>
                  <Button onPress={() => decrement(item)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159C1"
                    />
                  </Button>
                  <Input
                    type="number"
                    readOnly
                    defaultValue={String(item.amount)}
                    value={String(item.amount)}
                  />
                  <Button onPress={() => increment(item)}>
                    <Icon name="add-circle-outline" size={20} color="#7159C1" />
                  </Button>
                </ProductQuantity>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>
                  {item.subtotal}
                </Text>
              </ProductQuantityAndTotal>
            </Product>
          )}
        />

        <TotalContainer>
          <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 13 }}>
            TOTAL
          </Text>
          <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{total}</Text>
        </TotalContainer>
        <OrderButton
          onPress={() =>
            Alert.alert('Pedido Finalizado', 'Você finalizou seu pedido!')
          }
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>
            FINALIZAR PEDIDO
          </Text>
        </OrderButton>
      </Container>
    </Background>
  );
}
