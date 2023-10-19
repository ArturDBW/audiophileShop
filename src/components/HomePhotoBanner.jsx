import ZX9Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import ZX7Speaker from "../assets/home/desktop/image-speaker-zx7.jpg";
import ZX7SpeakerTablet from "../assets/home/tablet/image-speaker-zx7.jpg";
import Earphones from "../assets/home/desktop/image-earphones-yx1.jpg";
import { LinkButton } from "../elements/LinkButton";

export const HomePhotoBanner = () => {
  return (
    <section className="mx-auto grid  max-w-[1440px] grid-cols-2 gap-10 px-10 text-white">
      <div className=" max-lg: max-lg: col-span-full flex items-center  justify-around overflow-hidden rounded-xl bg-[#D87D4A] pt-20 max-lg:flex-col max-lg:p-6">
        <img
          className=" mb-[-15px] w-[30%] max-lg:mb-12"
          src={ZX9Speaker}
          alt="ZX9 Speaker"
        />
        <div className="flex w-[30%] flex-col items-start max-lg:mb-10 max-lg:w-full max-lg:items-center max-lg:text-center">
          <h2 className="text-[56px] font-bold leading-[60px]">
            <span className="block">ZX9</span>
            <span className="block">SPEAKER</span>
          </h2>
          <p className="py-10 text-[#e2e2e2]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <LinkButton
            to={"/products?category=speakers"}
            backgroundStyleClass={`bg-black hover:bg-[#4C4C4C]`}
          >
            SEE PRODUCT
          </LinkButton>
        </div>
      </div>
      <div className="relative col-span-full">
        <picture>
          <source srcSet={ZX7SpeakerTablet} media="(max-width: 768px)" />
          <source srcSet={ZX7Speaker} media="(min-width: 769px)" />
          <img
            className="w-full rounded-xl"
            src={ZX7Speaker}
            alt="ZX7 Speaker"
          />
        </picture>
        <div className="absolute left-[64px] top-[30%] text-black max-sm:left-[36px]">
          <h2 className="mb-10 text-3xl font-bold max-sm:text-2xl">
            ZX7 SPEAKER
          </h2>
          <LinkButton
            to={"/products/zx7-speaker"}
            backgroundStyleClass={`hover:bg-[#000] hover:text-white text-black bg-transparent border border-black`}
          >
            SEE PRODUCT
          </LinkButton>
        </div>
      </div>
      <div className="max-md:col-span-full">
        <img
          className="w-full rounded-xl"
          src={Earphones}
          alt="YX1 Earphones"
        />
      </div>
      <div className=" rounded-xl bg-[#F1F1F1] text-black max-md:col-span-full max-md:py-10">
        <div className="flex h-full flex-col items-start justify-center p-16 max-lg:px-10 max-lg:py-4">
          <h2 className="mb-10 text-[32px] font-bold">YX1 EARPHONES</h2>
          <LinkButton
            to={"/products/yx1-earphones"}
            backgroundStyleClass={`hover:bg-[#000] hover:text-white text-black bg-transparent border border-black`}
          >
            SEE PRODUCT
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
