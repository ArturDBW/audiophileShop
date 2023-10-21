import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const linkStyles = "transition-all hover:text-[#D87D4A]";

export const Navigation = ({ styleClassHidden, styleClassFlex, onClick }) => {
  return (
    <nav className={`${styleClassHidden}`}>
      <ul
        className={`bold space-x-9 text-sm font-bold uppercase tracking-[3px] text-white ${styleClassFlex}`}
      >
        <Link to="/" onClick={onClick} className={linkStyles}>
          Home
        </Link>
        <Link
          to="/products?category=headphones"
          onClick={onClick}
          className={linkStyles}
        >
          Headphones
        </Link>
        <Link
          to="/products?category=speakers"
          onClick={onClick}
          className={linkStyles}
        >
          Speakers
        </Link>
        <Link
          to="/products?category=earphones"
          onClick={onClick}
          className={linkStyles}
        >
          Earphones
        </Link>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  styleClassHidden: PropTypes.string,
  styleClassFlex: PropTypes.string,
  onClick: PropTypes.func,
};
