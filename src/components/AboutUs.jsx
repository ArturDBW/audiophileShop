import headphones from "../../src/assets/shared/desktop/image-best-gear.jpg";

export const AboutUs = () => {
  return (
    <section className="mx-auto mt-[200px] flex max-w-[1440px] gap-10">
      <div className="mb-10 flex flex-1 flex-col justify-center">
        <div className="w-[80%]">
          <h2 className="mb-10 text-[40px] font-bold uppercase leading-[45px]">
            <span className="block"> Bringing you the</span>
            <span className="block">
              <span className="text-[#D87D4A]">best</span> audio gear
            </span>
          </h2>
          <p className="text-[15px]">
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
          className="w-full rounded-xl"
          src={headphones}
          alt="men with headphones"
        />
      </div>
    </section>
  );
};
