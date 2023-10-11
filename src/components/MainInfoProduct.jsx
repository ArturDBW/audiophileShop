import PropTypes from "prop-types";
import { OrangeButton } from "../elements/OrangeButton";
import { QuantityButton } from "../elements/QuantityButton";
import { useDispatch } from "react-redux";
import { addItem } from "../slice/basketSlice";

export const MainInfoProduct = ({ item }) => {
  const { name, description, image, price, id } = item;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newCartProduct = {
      id,
      name,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newCartProduct));
  };

  return (
    <div className="mx-auto mt-36 flex max-w-[1440px] gap-x-[10%]">
      <div className="flex-1">
        <img src={image.desktop} alt={name} />
      </div>
      <div className=" flex flex-1 flex-col items-start justify-center">
        {item.new ? (
          <span className="mb-4 text-sm uppercase tracking-[12px] text-[#D87D4A]">
            New product
          </span>
        ) : null}
        <h4 className="text-[40px] font-bold uppercase leading-10 text-black">
          {name}
        </h4>
        <p className="mb-6 mt-10 text-base text-[#979797]">{description}</p>
        <span className="mb-6 text-lg font-bold">$ {price}</span>
        <div className="flex space-x-6">
          <QuantityButton></QuantityButton>
          <OrangeButton onClick={handleAddToCart}>ADD TO CART</OrangeButton>
        </div>
      </div>
    </div>
  );
};

MainInfoProduct.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
    new: PropTypes.bool,
    id: PropTypes.number,
    price: PropTypes.number,
  }),
};

///

// import PropTypes from "prop-types";
// import { OrangeButton } from "../elements/OrangeButton";
// import { QuantityButton } from "../elements/QuantityButton";

// export const MainInfoProduct = ({ item }) => {
//   const { name, slug, description, image, price } = item;

//   return (
//     <div className="mx-auto mt-36 flex max-w-[1440px] gap-x-[10%]">
//       <div className="flex-1">
//         <img src={image.desktop} alt={name} />
//       </div>
//       <div className=" flex flex-1 flex-col items-start justify-center">
//         {item.new ? (
//           <span className="mb-4 text-sm uppercase tracking-[12px] text-[#D87D4A]">
//             New product
//           </span>
//         ) : null}
//         <h4 className="text-[40px] font-bold uppercase leading-10 text-black">
//           {name}
//         </h4>
//         <p className="mb-6 mt-10 text-base text-[#979797]">{description}</p>
//         <span className="mb-6 text-lg font-bold">$ {price}</span>
//         <div className="flex space-x-6">
//           <QuantityButton></QuantityButton>
//           <OrangeButton to={`/products/${slug}`}>ADD TO CART</OrangeButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// MainInfoProduct.propTypes = {
//   item: PropTypes.shape({
//     name: PropTypes.string,
//     slug: PropTypes.string,
//     category: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.object,
//     new: PropTypes.bool,
//     id: PropTypes.number,
//     price: PropTypes.number,
//   }),
// };
