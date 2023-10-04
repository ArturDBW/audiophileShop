import { HeaderCategory } from "../components/HeaderCategory";
import { ProductsPreview } from "../components/ProductsPreview";
import { ProductsCategory } from "../components/ProductsCategory";
import { AboutUs } from "../components/AboutUs";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const useScrollToTopOnCategoryChange = (category) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);
};

export const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  useScrollToTopOnCategoryChange(category);

  return (
    <>
      <HeaderCategory>{category}</HeaderCategory>
      <ProductsPreview category={category} />
      <ProductsCategory />
      <AboutUs />
    </>
  );
};
