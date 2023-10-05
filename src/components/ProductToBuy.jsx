import { MainInfoProduct } from "./MainInfoProduct";
import { FeaturesInfoProduct } from "./FeaturesInfoProduct";

export const ProductToBuy = ({ item }) => {
  return (
    <>
      <MainInfoProduct item={item} />
      <FeaturesInfoProduct item={item} />
    </>
  );
};
