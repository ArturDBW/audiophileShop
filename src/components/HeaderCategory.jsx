import PropTypes from "prop-types";

export const HeaderCategory = ({ children }) => {
  return (
    <div className="bg-[#1a1919]">
      <div className="mx-auto max-w-[1440px] border-t border-[#979797]">
        <h2 className="py-16 text-center text-[40px] font-bold uppercase text-white">
          {children}
        </h2>
      </div>
    </div>
  );
};

HeaderCategory.propTypes = {
  children: PropTypes.string,
};
