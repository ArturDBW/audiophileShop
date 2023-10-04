import { ProductInfo } from "./ProductInfo";
import productsData from "../data.json";

export const HeadphonesPreview = () => {
  const onlyHeadphones = productsData.filter(
    (productsData) => productsData.category === "headphones",
  );

  return (
    <section className="flex flex-col-reverse">
      {onlyHeadphones.map((item) => (
        <ProductInfo item={item} key={item.id} />
      ))}
    </section>
  );
};
