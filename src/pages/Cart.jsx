import { useSelector } from "react-redux";
import { getBasket } from "../slice/basketSlice";
import { CartProduct } from "../components/CartProduct";
import { OrangeButton } from "../elements/OrangeButton";

export const Cart = () => {
  const cart = useSelector(getBasket);
  console.log(cart);
  return (
    <div className=" z-10 h-screen w-screen  bg-black bg-opacity-20">
      <div className="fixed right-[100px] top-[100px] rounded-lg bg-white p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-bold">Cart (3)</h3>
          <button>Remove All</button>
        </div>
        {cart.map((item) => (
          <CartProduct item={item} key={item.id} />
        ))}
        <div className="my-5 flex items-center justify-between">
          <span>Total</span>
          <span className="text-lg font-bold">$4332</span>
        </div>
        <div className="flex justify-stretch">
          <OrangeButton>CHECKOUT</OrangeButton>
        </div>
      </div>
    </div>
  );
};
