import HeadphonesImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { ArrowButton } from "../elements/ArrowButton";

export const ProdcutsCategory = () => {
  return (
    <section className="mx-auto mb-[200px]  mt-[300px] flex max-w-[1440px] justify-between gap-10 ">
      <div className=" relative  flex flex-1 flex-col justify-end rounded-xl bg-[#f1f1f1] p-10 text-center max-md:h-[200px]">
        <img
          className="absolute  left-1/2  -translate-x-1/2 transform max-xl:top-[-20%] max-lg:top-[-10%] max-md:top-[-35%]"
          src={HeadphonesImg}
          alt="headphones"
        />
        <h6 className="mb-3 text-lg font-bold tracking-wider">HEADPHONES</h6>
        <ArrowButton>SHOP</ArrowButton>
      </div>
      <div className="relative  flex flex-1  flex-col justify-end rounded-xl bg-[#f1f1f1] p-10 text-center max-md:h-[200px]">
        <img
          className="absolute  left-1/2  -translate-x-1/2 transform max-xl:top-[-20%] max-lg:top-[-10%] max-md:top-[-35%]"
          src={SpeakersImg}
          alt="speakers"
        />
        <h6 className="mb-3 text-lg font-bold tracking-wider">SPEAKERS</h6>
        <ArrowButton>SHOP</ArrowButton>
      </div>
      <div className="relative flex h-[300px] flex-1 flex-col justify-end rounded-xl bg-[#f1f1f1] p-10  text-center max-md:h-[200px]">
        <img
          className="absolute  left-1/2  -translate-x-1/2 transform max-xl:top-[-20%] max-lg:top-[-10%] max-md:top-[-35%]"
          src={EarphonesImg}
          alt="earnphones"
        />
        <h6 className="mb-3 text-lg font-bold tracking-wider">EARPHONES</h6>
        <ArrowButton>SHOP</ArrowButton>
      </div>
    </section>
  );
};
