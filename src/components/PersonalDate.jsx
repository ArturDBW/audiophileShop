import { BillingDetails } from "./BillingDetails";
import { PaymentDetails } from "./PaymentDetails";
import { ShippingInfo } from "./ShippingInfo";

export const PersonalDate = () => {
  return (
    <div className="my-10 flex-grow-[2] rounded-lg bg-white p-6 max-lg:w-full">
      <h2 className="text-4xl font-bold max-sm:text-3xl">CHECKOUT</h2>
      <div>
        <BillingDetails />
        <ShippingInfo />
        <PaymentDetails />
      </div>
    </div>
  );
};
