import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import api from '~/services/api';

import { formatPrice } from '~/util/format';
import { Container } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
      console.tron(data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <Text>Oi Home</Text>
    </Container>
  );
}
