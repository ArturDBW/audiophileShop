import { Link } from "react-router-dom";
const linkStyles = "transition-all hover:text-[#D87D4A]";

export const Navigation = () => {
  return (
    <nav>
      <ul className="bold space-x-9 text-[13px] font-bold uppercase tracking-[3px] text-white ">
        <Link to="/" className={linkStyles}>
          Home
        </Link>
        <Link to="/products?category=headphones" className={linkStyles}>
          Headphones
        </Link>
        <Link to="/products?category=speakers" className={linkStyles}>
          Speakers
        </Link>
        <Link to="/products?category=earphones" className={linkStyles}>
          Earphones
        </Link>
      </ul>
    </nav>
  );
};
