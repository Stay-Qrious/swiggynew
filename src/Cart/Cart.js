import { useDispatch, useSelector } from "react-redux";
import FoodCard from "../FoodCard/FoodCard";
import { clearCart } from "../CardSlice/CardSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
    <h1>Cart Items - {cartItems.length}</h1>
    <button
      className="bg-green-400 hover:bg-green-500 active:bg-green-700 m-2 p-2 rounded-lg"
      onClick={() => {
        handleClearCart();
      }}
    >
      Clear Cart
    </button>

    <div className="flex flex-wrap justify-around gap-y-4 ">
      {cartItems.map((i) => {
        return <FoodCard {...i} />;
      })}
    </div>
  </>
  );
};

export default Cart;
