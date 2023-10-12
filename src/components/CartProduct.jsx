import PropTypes from "prop-types";
import { QuantityButton } from "../elements/QuantityButton";

export const CartProduct = ({ item }) => {
  const { image, shortName, totalPrice } = item;

  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="mr-10 flex">
        <img src={image} alt="xd" className="mr-4 w-[80px] rounded-lg" />
        <div className="mr-10 flex flex-col justify-around">
          <span className="font-bold">{shortName}</span>
          <span className="text-sm font-bold text-[#979797]">
            $ {totalPrice}{" "}
          </span>
        </div>
      </div>
      <div>
        <QuantityButton />
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  item: PropTypes.shape({
    shortName: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
