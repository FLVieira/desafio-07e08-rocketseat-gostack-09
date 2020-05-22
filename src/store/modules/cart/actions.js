export function addToCartRequest(id, navigation) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: {
      id,
      navigation,
    },
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function updateAmountRequest(id, amount) {
  return { type: '@cart/UPDATE_AMOUNT_REQUEST', id, amount };
}

export function updateAmountSuccess(id, amount) {
  return { type: '@cart/UPDATE_AMOUNT_SUCCESS', id, amount };
}
