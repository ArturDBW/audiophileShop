import PropTypes from "prop-types";

export const OrangeButton = ({ children }) => {
  return (
    <button className="bg-[#D87D4A] px-8 py-4 text-[13px] font-bold tracking-[1px] text-white transition-all hover:bg-[#fbaf85]">
      {children}
    </button>
  );
};

OrangeButton.propTypes = {
  children: PropTypes.string,
};
