import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import * as cartActions from './actions';
import api from '~/services/api';
import { formatPrice } from '~/util/format';

function* addToCart({ payload }) {
  const { id, navigation } = payload;
  console.tron.log(id);
  /**
   * Checking if product is already in the cart - Part 1
   */
  const productExists = yield select((state) =>
    state.cart.find((product) => product.id === id)
  );

  /**
   * Checking if the current amount of the product selected
   * exists in the stock
   */
  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert(
      'Erro na adição do produto',
      'Quantidade solicitada fora de estoque.'
    );
    return;
  }

  /**
   * Checking if product is already in the cart - Part 2
   */
  if (productExists) {
    yield put(cartActions.updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(cartActions.addToCartSuccess(data));
    navigation.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert(
      'Erro na adição do produto',
      'Quantidade solicitada fora de estoque.'
    );
    return;
  }

  yield put(cartActions.updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
