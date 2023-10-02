import PropTypes from "prop-types";

export const TransparentButton = ({ children }) => {
  return (
    <button className="border border-black bg-transparent px-8 py-4 text-[13px] font-bold tracking-[1px] text-black transition-all hover:bg-[#000] hover:text-white">
      {children}
    </button>
  );
};

TransparentButton.propTypes = {
  children: PropTypes.string,
};
