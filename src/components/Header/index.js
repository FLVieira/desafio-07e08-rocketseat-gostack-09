import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, CartText } from './styles';
import LogoImage from '~/assets/images/logo.svg';

export default function Header({ scene, previous, navigation }) {
  return (
    <Container>
      <Logo onPress={() => navigation.navigate('Home')}>
        <LogoImage width={120} height={70} />
      </Logo>

      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={30} color="#fff" />
        <CartText>0</CartText>
      </Cart>
    </Container>
  );
}
