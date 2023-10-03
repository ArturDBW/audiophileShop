import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul className="bold space-x-9 text-[13px] font-bold uppercase tracking-[3px] text-white ">
        <Link className="transition-all hover:text-[#D87D4A]" to="/">
          Home
        </Link>
        <Link className="transition-all hover:text-[#D87D4A]" to="/headphones">
          Headphones
        </Link>
        <Link className="transition-all hover:text-[#D87D4A]" to="/speakers">
          Speakers
        </Link>
        <Link className="transition-all hover:text-[#D87D4A]" to="/earphones">
          Earphones
        </Link>
      </ul>
    </nav>
  );
};
