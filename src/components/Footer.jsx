import { Logo } from "../svg/Logo";
import { Navigation } from "./Navigation";
import { Facebook } from "../svg/Facebook";
import { Twitter } from "../svg/Twitter";
import { Instagram } from "../svg/Instagram";

export const Footer = () => {
  return (
    <footer className=" bg-[#1a1919]">
      <div className="mx-auto max-w-[1440px] px-10 py-12 text-center">
        <div className="flex justify-between max-md:flex-col max-md:space-y-10">
          <Logo styleClass="mx-auto" />
          <Navigation
            styleClassFlex={
              "max-sm:flex flex-col max-sm:space-x-0 max-sm:space-y-8"
            }
          />
        </div>
        <div className="mt-10 flex max-sm:flex-col max-sm:space-y-10">
          <div className="flex-1">
            <p className="font-[15px] text-[#979797]">
              Audiophile is an all in one stop to fulfill your audio needs.
              We`re a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we`re open 7 days a week.
            </p>
          </div>
          <div className="flex flex-1 items-end justify-end space-x-4 text-white max-sm:justify-center">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <div className="mt-20 font-[15px] text-[#979797]">
          <span>Copyright 2021. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};
