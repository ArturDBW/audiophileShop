import HeadphonesImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { ArrowButton } from "../elements/ArrowButton";
import PropTypes from "prop-types";

const mapCategoryToImage = {
  headphones: HeadphonesImg,
  speakers: SpeakersImg,
  earphones: EarphonesImg,
};

const ProductCategory = ({ category }) => {
  return (
    <div className="relative mt-24 flex flex-1 flex-col justify-end rounded-xl bg-[#f1f1f1] p-10 text-center max-md:h-[200px]">
      <img
        className={
          "absolute left-1/2 -translate-x-1/2 transform max-xl:top-[-20%] max-lg:top-[-10%] max-md:top-[-35%]"
        }
        src={mapCategoryToImage[category]}
        alt={category}
      />
      <h6 className={"mb-3 text-lg font-bold uppercase tracking-wider"}>
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
    <section className="mx-auto mb-[200px] mt-[300px] flex max-w-[1440px] justify-between gap-10 ">
      <ProductCategory category={"headphones"} />
      <ProductCategory category={"speakers"} />
      <ProductCategory category={"earphones"} />
    </section>
  );
};
