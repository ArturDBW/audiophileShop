import { useSelector } from "react-redux";
import { getBasket } from "../slice/basketSlice";
import { CartProduct } from "./CartProduct";
import { LinkButton } from "../elements/LinkButton";

export const Summary = () => {
  const cart = useSelector(getBasket);
  console.log(cart);
  return (
    <div className="mt-10  flex-grow-[1] items-center rounded-lg bg-white p-6">
      <h4 className="mb-4 text-lg font-bold">SUMMARY</h4>
      {cart.map((item) => (
        <CartProduct key={item.id} item={item} />
      ))}
      <div className="flex justify-between py-1">
        <span className="text-[#979797]">TOTAL</span>
        <span className="font-bold">$ 5324</span>
      </div>
      <div className="flex justify-between py-1">
        <span className="text-[#979797]">SHIPPING</span>
        <span className="font-bold">$ 50</span>
      </div>
      <div className="flex justify-between py-1">
        <span className="text-[#979797]">VAT (INCLUDED)</span>
        <span className="font-bold">$ 1079</span>
      </div>
      <div className="flex justify-between py-4">
        <span className="text-[#979797]">GRAND TOTAL</span>
        <span className="font-bold text-[#D87D4A]">$ 5433</span>
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
