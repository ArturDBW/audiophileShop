export const PaymentDetails = () => {
  const inputStyles = `rounded-lg border border-[#CFCFCF] px-4 py-3 text-sm font-bold outline-[#D87D4A]`;
  return (
    <div>
      <h3 className="mb-4 mt-8 font-bold text-[#D87D4A]">PAYMENT DETAILS</h3>
      <div className="grid grid-cols-2 gap-8">
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
          <input type="text" placeholder="120091" className={inputStyles} />
        </form>
      </div>
    </div>
  );
};
