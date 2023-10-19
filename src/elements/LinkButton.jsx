import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const LinkButton = ({
  children,
  to,
  onClick,
  strechStyleClass,
  backgroundStyleClass,
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-8 py-4 text-sm font-bold uppercase tracking-[1px] transition-all max-[400px]:px-6 ${strechStyleClass} ${backgroundStyleClass}`}
    >
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  strechStyleClass: PropTypes.string,
  backgroundStyleClass: PropTypes.string,
};
