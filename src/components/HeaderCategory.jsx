import PropTypes from "prop-types";

export const HeaderCategory = ({ children }) => {
  return (
    <div className="bg-[#1a1919] px-10">
      <div className="mx-auto max-w-[1440px] border-t border-[#979797]">
        <h2 className="py-16 text-center text-4xl font-bold uppercase text-white max-md:py-10 max-md:text-3xl">
          {children}
        </h2>
      </div>
    </div>
  );
};

HeaderCategory.propTypes = {
  children: PropTypes.string,
};
