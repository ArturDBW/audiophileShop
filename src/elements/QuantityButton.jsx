export const QuantityButton = () => {
  return (
    <div className="flex items-center space-x-6 bg-[#F1F1F1] text-sm font-bold tracking-[1px]">
      <button className=" px-4 py-2 text-[#979797]">-</button>
      <span className="w-4 text-center">1</span>
      <button className=" px-4 py-2 text-[#979797]">+</button>
    </div>
  );
};
