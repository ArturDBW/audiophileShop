import PropTypes from "prop-types";

export const PhotosProduct = ({ item }) => {
  const { gallery, name } = item;
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="mx-10 mt-20 grid max-w-[1440px] grid-cols-[2_min-content] grid-rows-2 justify-items-start gap-10 max-lg:grid-cols-1">
        <img
          src={gallery.first.desktop}
          alt={name}
          className="h-[280px] w-full rounded-xl max-lg:col-span-full max-lg:h-auto"
        />
        <img
          src={gallery.second.desktop}
          alt={name}
          className="col-start-1 col-end-2 h-[280px] w-full rounded-xl max-lg:col-span-full max-lg:h-auto"
        />
        <img
          src={gallery.third.desktop}
          alt={name}
          className="col-start-2 col-end-3 row-start-1 row-end-3 h-[600px] w-full rounded-xl max-lg:col-span-full max-lg:h-auto"
        />
      </div>
    </div>
  );
};

PhotosProduct.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gallery: PropTypes.shape({
      first: PropTypes.shape({
        desktop: PropTypes.string.isRequired,
      }).isRequired,
      second: PropTypes.shape({
        desktop: PropTypes.string.isRequired,
      }).isRequired,
      third: PropTypes.shape({
        desktop: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
