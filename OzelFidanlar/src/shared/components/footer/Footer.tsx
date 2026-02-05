import React from "react";
import FooterImage from "../../../assets/images/home/footer/footer-bg.jpeg";
import { Container } from "../container/Container";
import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#001064] text-white">
      <div className="relative overflow-hidden group">
        <img
          src={FooterImage}
          alt="Footer Background"
          className="w-full h-20 lg:h-48 object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#001064]/25" />
      </div>

      <div className="flex justify-center items-center py-10 lg:py-16">
        <Container>
          <div className="grid grid-cols-12 gap-6 lg:gap-10 w-full">
            <div className="col-span-12 lg:col-span-4">
              <FooterBrand />
            </div>

            <div className="col-span-12 lg:col-span-3">
              <FooterContact />
            </div>

            <div className="col-span-12 lg:col-span-2">
              <FooterNav />
            </div>

            <div className="col-span-12 lg:col-span-3">
              <FooterSocial />
            </div>
          </div>
        </Container>
      </div>

      <FooterBottom />
    </footer>
  );
};
