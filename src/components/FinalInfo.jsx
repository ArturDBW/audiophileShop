import PropTypes from "prop-types";
import { LinkButton } from "../elements/LinkButton";
import { OrderConfirmation } from "../svg/OrderConfirmation";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket, getBasket } from "../slice/basketSlice";
import { CartProduct } from "./CartProduct";
import { useState } from "react";

export const FinalInfo = ({ fullOrderPrice }) => {
  const cart = useSelector(getBasket);
  const dispatch = useDispatch();
  const firstProduct = [cart[0]];
  const restProducts = cart.slice(1);

  const [showMoreProducts, setShowMoreProducts] = useState(false);
  const clearBasketAndLinkToHome = () => {
    dispatch(clearBasket());
    setShowMoreProducts(!showMoreProducts);
    document.body.style.overflow = "visible";
  };

  return (
    <div className="absolute  left-0 top-0  h-full w-full overflow-hidden bg-black bg-opacity-20">
      <div className="absolute bottom-2/4 right-2/4 translate-x-2/4 translate-y-1/2 rounded-lg bg-white p-6 max-sm:w-4/5">
        <OrderConfirmation />
        <h2 className="my-4 text-3xl font-bold">Thank you for your order</h2>
        <span className="text-[#979797]">
          You will receive an email confirmation shortly.
        </span>
        <div className="my-8 flex max-sm:flex-col">
          <div className="bg-[#F1F1F1] p-4">
            {firstProduct.map((item) => (
              <CartProduct
                item={item}
                key={item.id}
                canChangeQuantity={false}
              />
            ))}
            {showMoreProducts && (
              <>
                {restProducts.map((item) => (
                  <CartProduct
                    item={item}
                    key={item.id}
                    canChangeQuantity={false}
                  />
                ))}
              </>
            )}
            {cart.length > 1 && (
              <button
                onClick={() => setShowMoreProducts(!showMoreProducts)}
                className="w-full border-t-[2px] py-2 text-[#979797]"
              >
                {showMoreProducts
                  ? "View less"
                  : `and ${cart.length - 1} other item's`}
              </button>
            )}
          </div>

          <div className="flex flex-col justify-end bg-black p-4 pr-20">
            <span className="text-[#979797]">GRAND TOTAL</span>
            <span className="my-4 text-lg font-bold text-white">
              $ {fullOrderPrice}
            </span>
          </div>
        </div>
        <LinkButton
          to={"/"}
          onClick={clearBasketAndLinkToHome}
          strechStyleClass={`flex justify-center`}
          backgroundStyleClass={`bg-[#D87D4A] hover:bg-[#fbaf85] text-white`}
        >
          BACK TO HOME
        </LinkButton>
      </div>
    </div>
  );
};

FinalInfo.propTypes = {
  openModalFinalInfo: PropTypes.bool.isRequired,
  setOpenModalFinalInfo: PropTypes.func.isRequired,
  fullOrderPrice: PropTypes.number,
};
