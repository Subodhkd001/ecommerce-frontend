import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
    cartItem: any;
};

const CartItems = ({cartItem}:CartItemProps) => {
    const {photo,productID,name,price,quantity,stock } = cartItem;
  return (
    <div className="cart-item">
        <img src={photo} alt={name} />
        <article>
            <Link to={`/product/${productID}`}>{name}</Link>
            <span>₹{price}</span>
        </article>

        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>

        <button>
            <FaTrash />
        </button>
    </div>
  )
}

export default CartItems