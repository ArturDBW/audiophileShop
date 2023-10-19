import { LinkButton } from "../elements/LinkButton";

export const Hero = () => {
  return (
    <section className="h-[calc(100vh-72px)] bg-hero bg-cover bg-center px-10 max-md:px-3">
      <div className="mx-auto h-full max-w-[1440px] border-t border-[#979797]">
        <div className="flex h-full max-w-lg flex-col items-start justify-center max-lg:mx-auto max-lg:items-center max-lg:text-center">
          <h4 className="text-sm tracking-[8px] text-[#747171]">NEW PRODUCT</h4>
          <h1 className="mt-8 text-6xl font-bold text-white max-sm:px-6 max-sm:text-4xl">
            XX99 MARK || HEADPHONES
          </h1>
          <p className="mb-14 mt-8 text-[#aaaaaa] max-sm:px-4">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <LinkButton
            to={"/products/xx99-mark-two-headphones"}
            backgroundStyleClass={`bg-[#D87D4A] hover:bg-[#fbaf85] text-white`}
          >
            SEE PRODUCT
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
