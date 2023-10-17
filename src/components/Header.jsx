import PropTypes from "prop-types";
import { Logo } from "../svg/Logo";
import { Basket } from "../svg/Basket";
import { Navigation } from "./Navigation";

export const Header = ({ openModalCart, setOpenModalCart }) => {
  return (
    <header className="border-b border-[#979797] bg-[#1a1919]">
      <div className=" mx-auto flex max-w-[1440px] items-center justify-between py-6">
        <Logo />
        <Navigation />
        <Basket
          openModalCart={openModalCart}
          setOpenModalCart={setOpenModalCart}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  openModalCart: PropTypes.bool.isRequired,
  setOpenModalCart: PropTypes.func.isRequired,
};
