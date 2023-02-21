import "./ProductCard.scss";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../Store/cart/cart.selector";
import { addItemToCart } from "../../Store/cart/cart.action";

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
         <span className='name'>{name}</span>
         <span className='price'>{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>Add to cart</Button>
    </div>
  )
}

export default ProductCard