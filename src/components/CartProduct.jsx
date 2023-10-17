import PropTypes from "prop-types";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../slice/basketSlice";
import { useDispatch } from "react-redux";

export const CartProduct = ({ item, canChangeQuantity }) => {
  const { image, shortName, totalPrice, id, quantity } = item;

  const dispatch = useDispatch();

  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="mr-10 flex">
        <img src={image} alt="xd" className="mr-4 w-[80px] rounded-lg" />
        <div className="mr-10 flex w-14 flex-col justify-around">
          <span className="font-bold">{shortName}</span>
          <span className="text-sm font-bold text-[#979797]">
            $ {totalPrice}
          </span>
        </div>
      </div>
      <div>
        {canChangeQuantity ? (
          <div className="flex items-center space-x-6 bg-[#F1F1F1] text-sm font-bold tracking-[1px]">
            <button
              onClick={() => dispatch(decreaseItemQuantity(id))}
              className="px-2 py-2 text-[#979797]"
            >
              -
            </button>
            <span className="w-2 text-center">{quantity}</span>
            <button
              onClick={() => dispatch(increaseItemQuantity(id))}
              className="px-2 py-2 text-[#979797]"
            >
              +
            </button>
          </div>
        ) : (
          <span className="text-[#979797]">x{quantity}</span>
        )}
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  item: PropTypes.shape({
    shortName: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  canChangeQuantity: PropTypes.bool.isRequired,
};
