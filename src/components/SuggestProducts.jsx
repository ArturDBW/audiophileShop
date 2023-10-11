import PropTypes from "prop-types";
import { SuggestProduct } from "./SuggestProduct";

export const SuggestProducts = ({ item }) => {
  return (
    <>
      <h2 className="mt-20 text-center text-4xl font-bold">
        You may also like
      </h2>
      <div className="mx-auto  mt-10 flex max-w-[1440px] gap-10">
        {item.others.map((item, i) => (
          <SuggestProduct key={i} item={item} />
        ))}
      </div>
    </>
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
