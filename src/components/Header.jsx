import { Logo } from "../svg/Logo";
import { Basket } from "../svg/Basket";
import { Navigation } from "./Navigation";

export const Header = ({ openModalCart, setOpenModalCart }) => {
  return (
    <header className="bg-[#1a1919]">
      <div className=" mx-auto flex max-w-[1440px] items-center justify-between border-b border-[#979797] py-6">
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
