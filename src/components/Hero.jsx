import { OrangeButton } from "../elements/OrangeButton";

export const Hero = () => {
  return (
    <section className="bg-hero h-[calc(100vh-72px)] bg-cover bg-center">
      <div className="mx-auto h-full max-w-[1440px]">
        <div className="flex h-full max-w-[400px] flex-col items-start justify-center">
          <h4 className="text-sm tracking-[8px] text-[#747171]">NEW PRODUCT</h4>
          <h1 className="mt-8 text-[56px] font-bold leading-[60px] text-white">
            XX99 MARK || HEADPHONES
          </h1>
          <p className="mb-14 mt-8 text-[#aaaaaa]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <OrangeButton>SEE PRODUCT</OrangeButton>
        </div>
      </div>
    </section>
  );
};
