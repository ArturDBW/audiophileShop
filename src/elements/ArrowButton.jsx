import PropTypes from "prop-types";

export const ArrowButton = ({ children }) => {
  return (
    <button className="z-10 mx-10 inline-flex items-center justify-center tracking-widest transition-all hover:text-[#D87D4A]">
      {children}
      <svg
        className="ml-3"
        width="8"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.322 1l5 5-5 5"
          stroke="#D87D4A"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};

ArrowButton.propTypes = {
  children: PropTypes.string,
};
