import { HeaderCategory } from "../components/HeaderCategory";
import { ProductsCategory } from "../components/ProductsCategory";
import { AboutUs } from "../components/AboutUs";
import { EarphonesPreview } from "../components/EarphonesPreview";

export const Earphones = () => {
  return (
    <>
      <HeaderCategory>Earphones</HeaderCategory>
      <EarphonesPreview />
      <ProductsCategory />
      <AboutUs />
    </>
  );
};
