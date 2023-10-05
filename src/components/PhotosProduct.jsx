import PropTypes from "prop-types";

export const PhotosProduct = ({ item }) => {
  return (
    <div className="mx-auto mt-20 grid max-w-[1440px] grid-cols-[2_min-content] grid-rows-2 justify-items-start gap-10">
      <img
        src={item.gallery.first.desktop}
        alt="d"
        className="h-[280px] w-full rounded-xl"
      />
      <img
        src={item.gallery.second.desktop}
        alt="d"
        className="col-start-1 col-end-2 h-[280px] w-full rounded-xl"
      />
      <img
        src={item.gallery.third.desktop}
        alt="d"
        className="col-start-2 col-end-3 row-start-1 row-end-3 h-[600px] w-full rounded-xl"
      />
    </div>
  );
};

PhotosProduct.propTypes = {
  item: PropTypes.shape({
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
