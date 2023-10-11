import { useParams } from "react-router-dom";
import productsData from "../data.json";
import { MainInfoProduct } from "../components/MainInfoProduct";
import { FeaturesInfoProduct } from "../components/FeaturesInfoProduct";
import { PhotosProduct } from "../components/PhotosProduct";
import { SuggestProducts } from "../components/SuggestProducts";
import { ProductsCategory } from "../components/ProductsCategory";
import { AboutUs } from "../components/AboutUs";

export const SingleProduct = () => {
  const { slug } = useParams();
  const singleProduct = productsData.find((item) => item.slug === slug);

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
