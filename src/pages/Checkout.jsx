import { PersonalDate } from "../components/PersonalDate";
import { Summary } from "../components/Summary";

export const Checkout = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-3 gap-x-10 bg-[#F1F1F1]">
        <PersonalDate />
        <Summary />
      </div>
    </div>
  );
};
