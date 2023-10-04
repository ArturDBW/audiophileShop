import { useParams } from "react-router-dom";
import data from "../data.json";
import { ProductInfo } from "../components/ProductInfo";

export const SingleProduct = () => {
  const { slug } = useParams();

  const singleProduct = data.find((item) => item.slug === slug);
  console.log(singleProduct);
  console.log("slug", slug);
  return <ProductInfo item={singleProduct} />;
};
