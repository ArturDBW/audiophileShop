import { OrangeButton } from "../elements/OrangeButton";

export const SuggestProduct = ({ item }) => {
  return (
    <div>
      <div>
        <img src={item.image.desktop} alt="xd" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="py-10 text-2xl font-bold">{item.name}</h3>
        <OrangeButton>See product</OrangeButton>
      </div>
    </div>
  );
};
