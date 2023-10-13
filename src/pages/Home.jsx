import { AboutUs } from "../components/AboutUs";
import { Hero } from "../components/Hero";
import { ProductsCategory } from "../components/ProductsCategory";
import { HomePhotoBanner } from "../components/HomePhotoBanner";

export const Home = () => {
  return (
    <>
      <Hero />
      <ProductsCategory />
      <HomePhotoBanner />
      <AboutUs />
    </>
  );
};
