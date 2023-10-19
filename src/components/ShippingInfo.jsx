export const ShippingInfo = () => {
  const inputStyles = `rounded-lg border border-[#CFCFCF] px-4 py-3 text-sm font-bold outline-[#D87D4A]`;
  return (
    <div>
      <h3 className="mb-4 mt-8 font-bold text-[#D87D4A]">SHIPPING INFO</h3>
      <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
        <form className="col-span-full flex flex-col">
          <span className="mb-1 text-sm font-bold text-black">Address</span>
          <input
            type="text"
            placeholder="1137 Williams Avenue"
            className={inputStyles}
          />
        </form>
        <form className="flex flex-col">
          <span className="mb-1 text-sm font-bold text-black">ZIP Code</span>
          <input type="text" placeholder="120099" className={inputStyles} />
        </form>
        <form className=" flex flex-col">
          <span className="mb-1 text-sm font-bold text-black">City</span>
          <input type="text" placeholder="Lipusz" className={inputStyles} />
        </form>
        <form className=" flex flex-col">
          <span className="mb-1 text-sm font-bold text-black">Country</span>
          <input
            type="text"
            placeholder="United States"
            className={inputStyles}
          />
        </form>
      </div>
    </div>
  );
};
