import { AboutUs } from "../components/AboutUs";
import { Hero } from "../components/Hero";
import { ProductsCategory } from "../components/ProductsCategory";
import { ProductsPreview } from "../components/ProductsPreview";

export const Home = () => {
  return (
    <>
      <Hero />
      <ProductsCategory />
      <ProductsPreview />
      <AboutUs />
    </>
  );
};
