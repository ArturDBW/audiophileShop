import { useSelector } from "react-redux";
import { getBasket } from "../slice/basketSlice";
import { CartProduct } from "../components/CartProduct";

export const Cart = () => {
  const cart = useSelector(getBasket);
  console.log(cart);
  return (
    <div>
      {cart.map((item) => (
        <CartProduct item={item} key={item.id} />
      ))}
    </div>
  );
};
