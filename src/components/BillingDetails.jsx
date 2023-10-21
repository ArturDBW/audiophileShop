export const BillingDetails = () => {
  const inputStyles = `rounded-lg border border-[#CFCFCF] px-4 py-3 text-sm font-bold outline-[#D87D4A]`;

  return (
    <div>
      <h3 className="mb-4 mt-8 font-bold text-[#D87D4A]">BILLING DETAILS</h3>
      <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
        <div className="flex flex-col">
          <span className="mb-1 text-sm font-bold text-black">Name</span>
          <input
            type="text"
            placeholder="Alexi Ramos"
            className={inputStyles}
          />
        </div>
        <div className="flex flex-col">
          <span className="mb-1 text-sm font-bold text-black">
            Email Address
          </span>
          <input
            type="email"
            placeholder="alramos@gmail.com"
            className={inputStyles}
          />
        </div>
        <div className="col-span-full flex flex-col">
          <span className="mb-1 text-sm font-bold text-black">
            Phone Number
          </span>
          <input
            type="text"
            placeholder="+1 202-511-0000"
            className={inputStyles}
          />
        </div>
      </div>
    </div>
  );
};
