import { useParams } from "react-router-dom";
import { ProductInfo } from "../components/ProductInfo";
import productsData from "../data.json";

export const SingleProduct = () => {
  const { slug } = useParams();

  const singleProduct = productsData.find((item) => item.slug === slug);
  return <ProductInfo item={singleProduct} />;
};
