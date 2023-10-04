import PropTypes from "prop-types";

import { OrangeButton } from "../elements/OrangeButton";

export const ProductInfo = ({ item }) => {
  const { name, slug, description, image, layout } = item;

  return (
    <div className="mx-auto mt-36 flex max-w-[1440px] gap-x-[10%]">
      <div className={`flex-1 ${layout === "right" ? "order-1 " : ""}`}>
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
        <p className="py-10 text-base text-[#979797]">{description}</p>
        <OrangeButton to={`/products/${slug}`}>SEE PRODUCT</OrangeButton>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
    new: PropTypes.bool,
    id: PropTypes.number,
    layout: PropTypes.string,
  }),
};
