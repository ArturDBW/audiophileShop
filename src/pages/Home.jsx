import { AboutUs } from "../components/AboutUs";
import { Hero } from "../components/Hero";
import { ProductsCategory } from "../components/ProductsCategory";
import { HomePhotoBanner } from "../components/HomePhotoBanner";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Link to={"checkout"}>TUTAJ</Link>
      <Hero />
      <ProductsCategory />
      <HomePhotoBanner />
      <AboutUs />
    </>
  );
};
