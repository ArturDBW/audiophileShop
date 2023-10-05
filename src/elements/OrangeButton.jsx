import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const OrangeButton = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="bg-[#D87D4A] px-8 py-4 text-sm font-bold tracking-[1px] text-white transition-all hover:bg-[#fbaf85]"
    >
      {children}
    </Link>
  );
};

OrangeButton.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
};
