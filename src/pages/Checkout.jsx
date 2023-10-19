import { PersonalDate } from "../components/PersonalDate";
import { Summary } from "../components/Summary";

export const Checkout = () => {
  return (
    <div className="bg-[#F1F1F1] px-10">
      <div className="mx-auto flex max-w-[1440px] items-start gap-x-10 bg-[#F1F1F1] max-lg:flex-col">
        <PersonalDate />
        <Summary />
      </div>
    </div>
  );
};
