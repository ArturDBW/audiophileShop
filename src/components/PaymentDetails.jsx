import { useState } from "react";
import { CashOnDelivery } from "../svg/CashOnDelivery";

export const PaymentDetails = () => {
  const inputStyles = `rounded-lg border border-[#CFCFCF] px-4 py-3 text-sm font-bold outline-[#D87D4A]`;
  const labelStyles = `my-2 rounded-lg border border-[#CFCFCF] px-4 py-3 hover:border-[#D87D4A] cursor-pointer`;

  const [selectedPayment, setSelectedPayment] = useState("eMoney");
  const handleOptionChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <div>
      <h3 className="mb-4 mt-8 font-bold text-[#D87D4A]">PAYMENT DETAILS</h3>
      <div className="grid grid-cols-2 gap-8 ">
        <div>
          <span className="text-sm font-bold">Payment Method</span>
        </div>
        <form className="flex flex-col">
          <label className={labelStyles}>
            <input
              type="radio"
              value="eMoney"
              checked={selectedPayment === "eMoney"}
              onChange={handleOptionChange}
              className="  text-orange-600 "
            />
            <span className="px-6 py-4 font-bold">e-Money</span>
          </label>
          <label className={labelStyles}>
            <input
              type="radio"
              value="Cash"
              checked={selectedPayment === "Cash"}
              onChange={handleOptionChange}
            />
            <span className="px-6 py-4 font-bold">Cash on Delivery</span>
          </label>
        </form>

        {selectedPayment === "eMoney" ? (
          <>
            <form className="flex flex-col">
              <span className="mb-1 text-sm font-bold text-black">Address</span>
              <input
                type="text"
                placeholder="1137 Williams Avenue"
                className={inputStyles}
              />
            </form>
            <form className="flex flex-col">
              <span className="mb-1 text-sm font-bold text-black">
                ZIP Code
              </span>
              <input type="text" placeholder="120091" className={inputStyles} />
            </form>
          </>
        ) : (
          <div className=" col-span-full flex items-center space-x-6">
            <div>
              <CashOnDelivery />
            </div>
            <div>
              <p>
                The Cash on Delivery option enables you <br /> to pay in cash
                when our delivery courier arrives at your <br /> residence. Just
                make sure your address is correct so that <br /> your order will
                not be cancelled.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
