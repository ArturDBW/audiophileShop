import { ProductInfo } from "./ProductInfo";
import productsData from "../data.json";

export const ProductPreview = () => {
  const onlyHeadphones = productsData.filter(
    (productsData) => productsData.category === "headphones",
  );
  console.log(onlyHeadphones);
  // const HeadphonesCondition = category;
  // const onlyHeadphonesProducts = productsData.filter((item) => item ? );
  return (
    <section className="flex flex-col-reverse">
      {onlyHeadphones.map((item) => (
        <ProductInfo item={item} key={item.id} />
      ))}
    </section>
  );
};
