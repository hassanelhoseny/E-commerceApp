import {getActualPrice} from '../../utils/helperFunctions';

export function totalSelector(state) {
  const {cartItems} = state.cart;



  const total = cartItems.reduce((acc, item) => {
    return acc + item.count * getActualPrice(item.product.price, 0.2);

  }, 0);



  return total.toFixed(2);
}
