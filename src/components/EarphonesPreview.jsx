import { ProductInfo } from "./ProductInfo";
import productsData from "../data.json";

export const EarphonesPreview = () => {
  const onlyEarphones = productsData.filter(
    (productsData) => productsData.category === "earphones",
  );

  return (
    <section className="flex flex-col-reverse">
      {onlyEarphones.map((item) => (
        <ProductInfo item={item} key={item.id} />
      ))}
    </section>
  );
};
