import { HeaderCategory } from "../components/HeaderCategory";
import { HeadphonesPreview } from "../components/HeadphonesPreview";
import { ProductsCategory } from "../components/ProductsCategory";
import { AboutUs } from "../components/AboutUs";
export const Headphones = () => {
  return (
    <>
      <HeaderCategory>Headphones</HeaderCategory>
      <HeadphonesPreview />
      <ProductsCategory />
      <AboutUs />
    </>
  );
};
