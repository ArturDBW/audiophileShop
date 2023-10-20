import PropTypes from "prop-types";
import { SuggestProduct } from "./SuggestProduct";

export const SuggestProducts = ({ item }) => {
  return (
    <div className="px-10 max-md:px-3">
      <h2 className="mt-20 text-center text-4xl font-bold max-md:text-3xl">
        You may also like
      </h2>
      <div className="mx-auto  mt-10 flex max-w-[1440px] gap-10 max-md:gap-5 max-sm:flex-col">
        {item.others.map((item, i) => (
          <SuggestProduct key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

SuggestProducts.propTypes = {
  item: PropTypes.shape({
    others: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        image: PropTypes.shape({
          desktop: PropTypes.string.isRequired,
        }).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
