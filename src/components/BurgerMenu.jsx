import { Navigation } from "../components/Navigation";

export const BurgerMenu = () => {
  return (
    <div className="hidden cursor-pointer max-md:order-first max-md:block">
      <div className="relative h-[3px] w-6 bg-white before:absolute before:bottom-2 before:block before:h-full before:w-full before:bg-white before:content-[''] after:absolute after:top-2 after:block after:h-full after:w-full after:bg-white after:content-['']  "></div>
      <div className="absolute  left-0 top-0 h-full w-full overflow-hidden bg-black bg-opacity-20">
        <div className="h-full w-5/12 bg-[#1a1919]">
          <Navigation
            styleClassFlex={
              "flex-col flex space-x-0 space-y-20 text-xl items-center pt-7"
            }
          />
        </div>
      </div>
    </div>
  );
};
