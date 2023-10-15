import { BillingDetails } from "./BillingDetails";
import { PaymentDetails } from "./PaymentDetails";
import { ShippingInfo } from "./ShippingInfo";

export const PersonalDate = () => {
  return (
    <div className="my-10 flex-grow-[2] rounded-lg bg-white p-6">
      <h2 className="text-4xl font-bold">CHECKOUT</h2>
      <div>
        <BillingDetails />
        <ShippingInfo />
        <PaymentDetails />
      </div>
    </div>
  );
};
