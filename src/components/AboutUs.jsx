import aboutUsImage from "/assets/shared/mobile/image-best-gear.jpg";

export const AboutUs = () => {
  return (
    <section className="mx-auto my-36 flex max-w-[1440px] gap-10 px-10 max-lg:my-24 max-md:my-16 max-md:flex-col max-sm:px-3">
      <div className="mb-10 flex flex-1 flex-col justify-center max-md:flex-col-reverse">
        <div className="max-md:text-center">
          <h2 className="mb-10 text-4xl font-bold uppercase max-lg:mb-8 max-lg:text-3xl">
            <span className="block"> Bringing you the</span>
            <span className="block">
              <span className="text-[#D87D4A]">best</span> audio gear
            </span>
          </h2>
          <p className="max-lg:text-sm">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <div className=" flex-1">
        <img
          className=" rounded-xl max-md:w-full"
          src={aboutUsImage}
          alt="men with headphones"
        />
      </div>
    </section>
  );
};
