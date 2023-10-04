import { ProductInfo } from "./ProductInfo";
import productsData from "../data.json";
import PropTypes from "prop-types";

export const ProductsPreview = ({ category }) => {
  const products = productsData.filter(
    (productsData) => productsData.category === category,
  );

  return (
    <section className="flex flex-col-reverse">
      {products.map((product) => (
        <ProductInfo item={product} key={product.id} />
      ))}
    </section>
  );
};

ProductsPreview.propTypes = {
  category: PropTypes.string.isRequired,
};
