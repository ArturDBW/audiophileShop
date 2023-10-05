import { MainInfoProduct } from "./MainInfoProduct";
import { FeaturesInfoProduct } from "./FeaturesInfoProduct";
import { PhotosProduct } from "./PhotosProduct";
import { SuggestProducts } from "./SuggestProducts";
import { ProductsCategory } from "./ProductsCategory";
import { AboutUs } from "./AboutUs";
export const ProductToBuy = ({ item }) => {
  return (
    <>
      <MainInfoProduct item={item} />
      <FeaturesInfoProduct item={item} />
      <PhotosProduct item={item} />
      <SuggestProducts item={item} />
      <ProductsCategory />
      <AboutUs />
    </>
  );
};
