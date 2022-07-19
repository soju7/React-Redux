import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from '../store/slice/cart-slice'

import "./Cart.css";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const quantity = cartItems.reduce( function(total, item){
    return total + item.quantity
  },0);
  
  const dispatch=useDispatch();  
  const showCart=()=>{
    dispatch(cartActions.setShowCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
