import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket, getBasket } from "../slice/basketSlice";
import { CartProduct } from "../components/CartProduct";
import { LinkButton } from "../elements/LinkButton";

export const ModalCart = ({ setOpenModalCart, openModalCart }) => {
  const cart = useSelector(getBasket);
  const dispatch = useDispatch();
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
          <h3 className="text-lg font-bold">Cart ({cart.length})</h3>
          <button
            onClick={() => dispatch(clearBasket())}
            className="text-[#979797] hover:underline"
          >
            Remove All
          </button>
        </div>
        {cart.map((item) => (
          <CartProduct item={item} key={item.id} />
        ))}
        <div className="my-5 flex items-center justify-between">
          <span>Total</span>
          <span className="text-lg font-bold">$4332</span>
        </div>
        <div>
          <LinkButton
            strechStyleClass={`flex justify-center`}
            backgroundStyleClass={`bg-[#D87D4A] hover:bg-[#fbaf85] text-white`}
          >
            CHECKOUT
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

ModalCart.propTypes = {
  openModalCart: PropTypes.bool.isRequired,
  setOpenModalCart: PropTypes.func.isRequired,
};
