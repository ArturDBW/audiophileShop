import PropTypes from "prop-types";

import { OrangeButton } from "../elements/OrangeButton";

export const ProductInfo = ({ item }) => {
  const { name, description, image } = item;
  //   const con = (item.new = true);
  return (
    <div className="mx-auto mt-[150px] flex max-w-[1440px] gap-x-[10%] ">
      <div className={`flex-1 ${item.id === 3 ? "order-1 " : "text-red-700"}`}>
        <img src={image.desktop} alt="product" />
      </div>
      <div className=" flex flex-1 flex-col items-start justify-center">
        {item.new ? (
          <span className="mb-4 text-[14px] uppercase tracking-[12px] text-[#D87D4A]">
            New product
          </span>
        ) : (
          ""
        )}
        <h4 className="text-[40px] font-bold uppercase leading-[40px] text-black">
          {name}
        </h4>
        <p className="py-10 text-[15px] text-[#979797]">{description}</p>
        <OrangeButton>SEE PRODUCT</OrangeButton>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
    new: PropTypes.bool,
    id: PropTypes.number,
  }),
};
