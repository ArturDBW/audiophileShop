import HeadphonesImg from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImg from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesImg from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { ArrowButton } from "../elements/ArrowButton";
import PropTypes from "prop-types";

const mapCategoryToImage = {
  headphones: HeadphonesImg,
  speakers: SpeakersImg,
  earphones: EarphonesImg,
};

const ProductCategory = ({ category }) => {
  return (
    <div className="relative mt-24 flex h-72 flex-1 flex-col justify-end rounded-xl bg-[#f1f1f1] p-10 text-center max-lg:h-60 max-md:h-[200px] max-md:px-0 max-sm:pt-[25%]">
      <img
        className="absolute left-1/2 -translate-x-1/2 transform max-xl:top-[-20%] max-lg:top-[-10%] max-md:top-[-35%] max-sm:w-1/2"
        src={mapCategoryToImage[category]}
        alt={category}
      />
      <h6
        className={
          "mb-3 text-lg font-bold uppercase tracking-wider max-md:text-lg"
        }
      >
        {category}
      </h6>
      <ArrowButton to={`/products?category=${category}`}>SHOP</ArrowButton>
    </div>
  );
};
ProductCategory.propTypes = {
  category: PropTypes.string,
};

export const ProductsCategory = () => {
  return (
    <section className="mx-auto mb-28 mt-72 flex max-w-[1440px] justify-between gap-10 px-10 pb-5 max-xl:mt-32 max-lg:mt-0 max-lg:gap-4 max-sm:mb-24 max-sm:flex-col max-sm:px-3">
      <ProductCategory category={"headphones"} />
      <ProductCategory category={"speakers"} />
      <ProductCategory category={"earphones"} />
    </section>
  );
};
