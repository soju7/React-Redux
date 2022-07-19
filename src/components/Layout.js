import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import { useSelector} from "react-redux";
import "./Layout.css";
const Layout = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  let total =  cartItems.reduce( function(total, item){
    return total + item.quantity*item.price
  },0);
  const showCart= useSelector((state) => state.cart.showCart);
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        { showCart && <CartItems/>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
