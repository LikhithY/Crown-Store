import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../Store/cart/cart.selector";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

const goToCheckoutHandler = () => {
  navigate("/checkout")
}

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
