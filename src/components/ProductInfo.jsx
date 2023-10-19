import PropTypes from "prop-types";

import { LinkButton } from "../elements/LinkButton";

export const ProductInfo = ({ item }) => {
  const { name, slug, description, image, layout } = item;

  return (
    <div className="mx-auto mt-36 flex max-w-[1440px] gap-x-[10%] px-10 max-md:mt-16 max-md:flex-col">
      <div className={`flex-1 ${layout === "right" ? "order-1 " : ""}`}>
        <img src={image.desktop} alt={name} className="" />
      </div>
      <div className="max-sm: flex flex-1 flex-col items-start justify-center max-md:order-first max-md:mb-10 max-md:mt-5 max-md:items-center max-md:text-center">
        {item.new ? (
          <span className="mb-4 text-sm uppercase tracking-[12px] text-[#D87D4A]">
            New product
          </span>
        ) : null}
        <h4 className=" text-4xl font-bold uppercase text-black max-lg:text-3xl">
          {name}
        </h4>
        <p className="py-10 text-base text-[#979797] max-lg:py-5">
          {description}
        </p>
        <LinkButton
          to={`/products/${slug}`}
          backgroundStyleClass={`bg-[#D87D4A] hover:bg-[#fbaf85] text-white`}
        >
          SEE PRODUCT
        </LinkButton>
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
