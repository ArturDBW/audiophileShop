import ZX9Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import ZX7Speaker from "../assets/home/desktop/image-speaker-zx7.jpg";
import Earphones from "../assets/home/desktop/image-earphones-yx1.jpg";
import { BlackButton } from "../elements/BlackButton";
import { TransparentButton } from "../elements/TransparentButton";

export const ProductsPreview = () => {
  return (
    <section className="mx-auto grid  max-w-[1440px] grid-cols-2 gap-10 text-white">
      <div className=" col-span-full flex justify-around overflow-hidden rounded-xl  bg-[#D87D4A] pt-24">
        <img
          className=" mb-[-15px] w-[30%]"
          src={ZX9Speaker}
          alt="ZX9 Speaker"
        />
        <div className="flex w-[30%] flex-col items-start ">
          <h2 className="text-[56px] font-bold leading-[60px]">
            <span className="block">ZX9</span>
            <span className="block">SPEAKER</span>
          </h2>
          <p className="py-10 text-[#e2e2e2]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <BlackButton>SEE PRODUCT</BlackButton>
        </div>
      </div>
      <div className="relative col-span-full">
        <img className="w-full rounded-xl" src={ZX7Speaker} alt="ZX7 Speaker" />
        <div className="absolute left-[64px] top-[30%] text-black">
          <h2 className="mb-10 text-[32px] font-bold">ZX7 SPEAKER</h2>
          <TransparentButton>SEE PRODUCT</TransparentButton>
        </div>
      </div>
      <div>
        <img
          className="w-full rounded-xl"
          src={Earphones}
          alt="YX1 Earphones"
        />
      </div>
      <div className=" rounded-xl bg-[#F1F1F1] text-black">
        <div className="flex h-full flex-col items-start justify-center p-16">
          <h2 className="mb-10 text-[32px] font-bold">YX1 EARPHONES</h2>
          <TransparentButton>SEE PRODUCT</TransparentButton>
        </div>
      </div>
    </section>
  );
};
