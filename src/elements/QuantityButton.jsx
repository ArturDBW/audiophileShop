import PropTypes from "prop-types";

export const QuantityButton = ({ onClick }) => {
  return (
    <div className="flex items-center space-x-6 bg-[#F1F1F1] text-sm font-bold tracking-[1px]">
      <button onClick={onClick} className=" px-4 py-2 text-[#979797]">
        -
      </button>
      <span className="w-2 text-center">1</span>
      <button onClick={onClick} className=" px-4 py-2 text-[#979797]">
        +
      </button>
    </div>
  );
};

QuantityButton.propTypes = {
  onClick: PropTypes.func,
};
