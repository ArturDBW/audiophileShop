import PropTypes from "prop-types";

import { OrangeButton } from "../elements/OrangeButton";

export const SuggestProduct = ({ item }) => {
  const { image, name, slug } = item;
  return (
    <div>
      <div>
        <img src={image.desktop} alt={name} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="py-10 text-2xl font-bold">{name}</h3>
        <OrangeButton to={`/products/${slug}`}>See product</OrangeButton>
      </div>
    </div>
  );
};

SuggestProduct.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
