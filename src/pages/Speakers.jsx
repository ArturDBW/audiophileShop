import { HeaderCategory } from "../components/HeaderCategory";
import { ProductsCategory } from "../components/ProductsCategory";
import { AboutUs } from "../components/AboutUs";
import { SpeakersPreview } from "../components/SpeakersPreview";

export const Speakers = () => {
  return (
    <>
      <HeaderCategory>Speakers</HeaderCategory>
      <SpeakersPreview />
      <ProductsCategory />
      <AboutUs />
    </>
  );
};
