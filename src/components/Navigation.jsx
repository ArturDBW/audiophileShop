import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const linkStyles = "transition-all hover:text-[#D87D4A]";

export const Navigation = ({ styleClassHidden, styleClassFlex }) => {
  return (
    <nav className={`${styleClassHidden}`}>
      <ul
        className={`bold space-x-9 text-sm font-bold uppercase tracking-[3px] text-white ${styleClassFlex}`}
      >
        <Link to="/" className={linkStyles}>
          Home
        </Link>
        <Link to="/products?category=headphones" className={linkStyles}>
          Headphones
        </Link>
        <Link to="/products?category=speakers" className={linkStyles}>
          Speakers
        </Link>
        <Link to="/products?category=earphones" className={linkStyles}>
          Earphones
        </Link>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  styleClassHidden: PropTypes.string.isRequired,
  styleClassFlex: PropTypes.string.isRequired,
};
