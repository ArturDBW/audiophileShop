import { useSelector } from "react-redux";
import { getBasket } from "../slice/basketSlice";
import { CartProduct } from "./CartProduct";
import { LinkButton } from "../elements/LinkButton";

export const Summary = () => {
  const cart = useSelector(getBasket);

  const totalAmount = cart.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);

  const shippingCost = 50;
  const vatCost = totalAmount * 0.23;
  const fullOrderPrice = totalAmount + shippingCost;

  return (
    <div className="my-10  flex-grow-[1] items-center rounded-lg bg-white p-6">
      <h4 className="mb-4 text-lg font-bold">SUMMARY</h4>
      {cart.map((item) => (
        <CartProduct key={item.id} item={item} />
      ))}
      <div className="flex justify-between py-1">
        <span className="text-[#979797]">TOTAL</span>
        <span className="font-bold">$ {totalAmount}</span>
      </div>
      <div className="flex justify-between py-1">
        <span className="text-[#979797]">SHIPPING</span>
        <span className="font-bold">$ {shippingCost}</span>
      </div>
      <div className="flex justify-between py-1">
        <span className="text-[#979797]">VAT (INCLUDED)</span>
        <span className="font-bold">$ {vatCost}</span>
      </div>
      <div className="flex justify-between py-4">
        <span className="text-[#979797]">GRAND TOTAL</span>
        <span className="font-bold text-[#D87D4A]">$ {fullOrderPrice}</span>
      </div>
      <LinkButton
        strechStyleClass={`flex justify-center`}
        backgroundStyleClass={`bg-[#D87D4A] hover:bg-[#fbaf85] text-white`}
      >
        CONTINUE & PAY
      </LinkButton>
    </div>
  );
};
