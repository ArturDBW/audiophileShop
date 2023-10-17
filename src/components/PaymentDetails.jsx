import { useState } from "react";

export const PaymentDetails = () => {
  // const inputStyles = `rounded-lg border border-[#CFCFCF] px-4 py-3 text-sm font-bold outline-[#D87D4A]`;

  const [selectedPayment, setSelectedPayment] = useState("eMoney");
  const handleOptionChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <div>
      <h3 className="mb-4 mt-8 font-bold text-[#D87D4A]">PAYMENT DETAILS</h3>
      <div className="grid grid-cols-2 gap-8 ">
        <form className="flex flex-col">
          <label className="my-2 rounded-lg border border-[#CFCFCF] px-4 py-3">
            <input
              type="radio"
              value="eMoney"
              checked={selectedPayment === "eMoney"}
              onChange={handleOptionChange}
            />
            <span className="px-6 py-4 font-bold">e-Money</span>
          </label>
          <label>
            <input
              type="radio"
              value="Cash"
              checked={selectedPayment === "Cash"}
              onChange={handleOptionChange}
            />
            <span>Cash on Delivery</span>
          </label>
        </form>
      </div>
    </div>
  );
};

{
  /* <form className="col-span-full flex flex-col">
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
        </form> */
}
