import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import api from '~/services/api';
import * as cartActions from '~/store/modules/cart/actions';

import { formatPrice } from '~/util/format';
import {
  Container,
  ProductList,
  Product,
  ProductItself,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
  AddToCartIcon,
  AddToCartText,
} from './styles';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(cartActions.addToCartRequest(id, navigation));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={(product) => product.key}
        renderItem={({ item }) => (
          <Product key={Math.random()}>
            <ProductItself>
              <ProductImage source={{ uri: item.image }} />
              <ProductInfo>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
              </ProductInfo>
            </ProductItself>

            <AddToCartButton onPress={() => handleAddProduct(item.id)}>
              <AddToCartIcon>
                <Icon name="shopping-cart" size={16} color="#FFF" />
                <Text style={{ color: '#fff' }}>{amount[item.id] || 0}</Text>
              </AddToCartIcon>

              <AddToCartText>ADICIONAR AO CARRINHO</AddToCartText>
            </AddToCartButton>
          </Product>
        )}
      />
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
