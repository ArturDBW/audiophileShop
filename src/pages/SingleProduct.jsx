import { MainInfoProduct } from "../components/MainInfoProduct";
import { FeaturesInfoProduct } from "../components/FeaturesInfoProduct";
import { PhotosProduct } from "../components/PhotosProduct";
import { SuggestProducts } from "../components/SuggestProducts";
import { ProductsCategory } from "../components/ProductsCategory";
import { AboutUs } from "../components/AboutUs";
import { useParams, useSearchParams } from "react-router-dom";
import productsData from "../data.json";
import { useEffect } from "react";

export const SingleProduct = () => {
  const { slug } = useParams();
  const singleProduct = productsData.find((item) => item.slug === slug);

  const useScrollToTopOnProductChange = (product) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [product]);
  };

  const [searchParams] = useSearchParams();
  const product = searchParams.get(singleProduct);
  useScrollToTopOnProductChange(product);

  return (
    <>
      <MainInfoProduct item={singleProduct} />
      <FeaturesInfoProduct item={singleProduct} />
      <PhotosProduct item={singleProduct} />
      <SuggestProducts item={singleProduct} />
      <ProductsCategory />
      <AboutUs />
    </>
  );
};
