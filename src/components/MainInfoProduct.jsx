import PropTypes from "prop-types";
import { LinkButton } from "../elements/LinkButton";
import { useDispatch } from "react-redux";
import { addItem } from "../slice/basketSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MainInfoProduct = ({ item }) => {
  const { name, shortName, description, image, price, id } = item;

  const [quantityNumber, setQuantityNumber] = useState(1);
  const increment = () => {
    setQuantityNumber(quantityNumber + 1);
  };
  const decrement = () => {
    if (quantityNumber <= 1) return;
    setQuantityNumber(quantityNumber - 1);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newCartProduct = {
      id,
      name,
      shortName,
      quantity: quantityNumber,
      unitPrice: price,
      totalPrice: price * quantityNumber,
      image: image.cart,
    };
    dispatch(addItem(newCartProduct));
  };

  return (
    <div className="mx-auto mt-24 flex max-w-[1440px] gap-x-[10%] px-10 max-lg:mt-8 max-lg:gap-6 max-md:flex-col max-md:px-3">
      <div className="flex-1">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-[#979797] hover:underline"
        >
          Go back
        </button>
        <img src={image.desktop} alt={name} />
      </div>
      <div className=" flex flex-1 flex-col items-start justify-center">
        {item.new ? (
          <span className="mb-4 text-sm uppercase tracking-[12px] text-[#D87D4A]">
            New product
          </span>
        ) : null}
        <h4 className="text-4xl font-bold uppercase text-black max-lg:text-2xl">
          {name}
        </h4>
        <p className="mb-6 mt-10 text-base text-[#979797] max-lg:mb-3 max-lg:mt-6">
          {description}
        </p>
        <span className="mb-6 text-lg font-bold">$ {price}</span>
        <div className="flex space-x-6">
          <div className="flex items-center space-x-6 bg-[#F1F1F1] text-sm font-bold tracking-[1px]">
            <button onClick={decrement} className=" px-4 py-2 text-[#979797]">
              -
            </button>
            <span className="w-2 text-center">{quantityNumber}</span>
            <button onClick={increment} className=" px-4 py-2 text-[#979797]">
              +
            </button>
          </div>
          <LinkButton
            onClick={handleAddToCart}
            backgroundStyleClass={`bg-[#D87D4A] hover:bg-[#fbaf85] text-white`}
          >
            ADD TO CART
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

MainInfoProduct.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    shortName: PropTypes.string,
    slug: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
    new: PropTypes.bool,
    id: PropTypes.number,
    price: PropTypes.number,
  }),
};
