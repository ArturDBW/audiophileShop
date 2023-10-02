import { Logo } from "../svg/Logo";
import { Basket } from "../svg/Basket";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" bg-[#1a1919]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-[#979797] py-6">
        <Logo />
        <nav>
          <ul className="bold space-x-9 text-[13px] font-bold uppercase tracking-[3px] text-white ">
            <Link className="transition-all hover:text-[#D87D4A]" to="/">
              Home
            </Link>
            <Link
              className="transition-all hover:text-[#D87D4A]"
              to="/headphones"
            >
              Headphones
            </Link>
            <Link
              className="transition-all hover:text-[#D87D4A]"
              to="/speakers"
            >
              Speakers
            </Link>
            <Link
              className="transition-all hover:text-[#D87D4A]"
              to="/earphones"
            >
              Earphones
            </Link>
          </ul>
        </nav>
        <Basket />
      </div>
    </header>
  );
};
