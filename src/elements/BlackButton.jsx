import PropTypes from "prop-types";

export const BlackButton = ({ children }) => {
  return (
    <button className="bg-[#000000] px-8 py-4 text-[13px] font-bold tracking-[1px] text-white transition-all hover:bg-[#4C4C4C]">
      {children}
    </button>
  );
};

BlackButton.propTypes = {
  children: PropTypes.string,
};
