import PropTypes from "prop-types";

export const FeaturesInfoProduct = ({ item }) => {
  const { features } = item;
  return (
    <div className="mx-auto mt-20 flex max-w-[1440px] gap-[10%]">
      <div className="w-1/2">
        <h4 className=" mb-10 text-3xl font-bold">Features</h4>
        <p className="text-base text-[#979797]">{features}</p>
      </div>
      <div className="w-1/2">
        <h4 className=" mb-10 text-3xl font-bold">In the box</h4>
        <ul>
          {item.includes.map((item, i) => (
            <IncludesBoxList key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const IncludesBoxList = ({ item }) => {
  return (
    <li className="py-1">
      <span className=" mr-6 font-bold text-[#D87D4A]">{item.quantity}x</span>
      <span className="text-[#979797]">{item.item}</span>
    </li>
  );
};

FeaturesInfoProduct.propTypes = {
  item: PropTypes.shape({
    features: PropTypes.string,
    includes: PropTypes.arrayOf(PropTypes.object),
  }),
};

IncludesBoxList.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number,
    item: PropTypes.string,
  }),
};