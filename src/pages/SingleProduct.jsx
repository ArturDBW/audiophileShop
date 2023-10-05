import { useParams } from "react-router-dom";
import { ProductToBuy } from "../components/ProductToBuy";
import productsData from "../data.json";

export const SingleProduct = () => {
  const { slug } = useParams();

  const singleProduct = productsData.find((item) => item.slug === slug);
  return <ProductToBuy item={singleProduct} />;
};
