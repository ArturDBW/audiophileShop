import { AboutUs } from "../components/AboutUs";
import { Hero } from "../components/Hero";
import { ProdcutsCategory } from "../components/ProdcutsCategory";
import { ProductsPreview } from "../components/ProductsPreview";

export const Home = () => {
  return (
    <>
      <Hero />
      <ProdcutsCategory />
      <ProductsPreview />
      <AboutUs />
    </>
  );
};
