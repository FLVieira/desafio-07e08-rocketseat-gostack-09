import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, Logo, Cart, CartText } from './styles';
import LogoImage from '~/assets/images/logo.svg';

export default function Header({ navigation }) {
  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Container>
      <Logo onPress={() => navigation.navigate('Home')}>
        <LogoImage width={120} height={70} />
      </Logo>

      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={30} color="#fff" />
        <CartText>{cartSize}</CartText>
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
