import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as cartActions from './actions';
import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
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
    toast.error('Quantidade solicitada fora de estoque.');
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
    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque.');
    return;
  }

  yield put(cartActions.updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
