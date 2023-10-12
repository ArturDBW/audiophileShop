import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getBasket } from "../slice/basketSlice";
import { CartProduct } from "../components/CartProduct";
import { OrangeButton } from "../elements/OrangeButton";

export const ModalCart = ({ setOpenModalCart, openModalCart }) => {
  const cart = useSelector(getBasket);
  console.log(cart);
  return (
    <div
      onClick={() => setOpenModalCart(!openModalCart)}
      className="absolute  left-0 top-0  h-full w-full overflow-hidden bg-black bg-opacity-20"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="fixed right-60 top-20 rounded-lg bg-white p-6"
      >
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

ModalCart.propTypes = {
  openModalCart: PropTypes.bool.isRequired,
  setOpenModalCart: PropTypes.func.isRequired,
};
