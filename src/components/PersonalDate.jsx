import { BillingDetails } from "./BillingDetails";
import { PaymentDetails } from "./PaymentDetails";
import { ShippingInfo } from "./ShippingInfo";

export const PersonalDate = () => {
  return (
    <div className="col-start-1 col-end-3 mt-10 bg-white">
      <h2 className="text-4xl font-bold">CHECKOUT</h2>
      <div>
        <BillingDetails />
        <ShippingInfo />
        <PaymentDetails />
      </div>
    </div>
  );
};
