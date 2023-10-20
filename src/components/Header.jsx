import PropTypes from "prop-types";
import { Logo } from "../svg/Logo";
import { Basket } from "../svg/Basket";
import { Navigation } from "./Navigation";
import { BurgerMenu } from "./BurgerMenu";

export const Header = ({ openModalCart, setOpenModalCart }) => {
  return (
    <header className=" bg-[#1a1919] px-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between py-6">
        <Logo />
        <BurgerMenu />
        <Navigation styleClassHidden={"max-md:hidden"} />
        <Basket
          openModalCart={openModalCart}
          setOpenModalCart={setOpenModalCart}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  openModalCart: PropTypes.bool,
  setOpenModalCart: PropTypes.func,
};
