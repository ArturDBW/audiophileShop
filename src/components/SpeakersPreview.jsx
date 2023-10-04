import { ProductInfo } from "./ProductInfo";
import productsData from "../data.json";

export const SpeakersPreview = () => {
  const onlySpeakers = productsData.filter(
    (productsData) => productsData.category === "speakers",
  );

  return (
    <section className="flex flex-col-reverse">
      {onlySpeakers.map((item) => (
        <ProductInfo item={item} key={item.id} />
      ))}
    </section>
  );
};
