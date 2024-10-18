import React from "react";
import { clearScreenDown } from "readline";
import data1 from "../servieceCardsData";
import OurWorks from "../ourWork";
import FooterAda from "../adaFooterCard";

const Adaservice = () => {
  return (
    <div className="bg-[#D4DBE2] max-w-[1440px] max-h-[5543px]  flex-col justify-center items-center  ">
      <div className="flex justify-center">
        <h1 className="text-[#0C0C0C] font-poppins text-[48px] font-semibold leading-normal py-[94px]">
          Our Serviese
        </h1>
      </div>
      <>
        {data1.map((data) => (
          <div className="flex justify-center ml-[80px] mr-[79px] pb-[20px]">
            <div className="bg-[#F7F7F7] max-w-[1281px] max-h-[568] rounded-[12px] shadow-[#D1D3D4] ">
              <div className="mx-[74px] mb-[71px] mt-[65px]">
                {data.map((items, index) => (
                  <div key={index} className="flex">
                    <div className="">
                      <h1 className="text-[#0C0C0C] font-poppins text-[48px] font-semibold leading-normal pb-6">
                        {items.title}
                      </h1>

                      <p className="text-[#83787C] font-poppins text-[20px] font-normal leading-[30px]">
                        Elevate your digital presence with our expert UI/UX
                        design consultancy. We specialize in creating intuitive,
                        user-friendly interfaces that enhance user engagement
                        and satisfaction.
                      </p>
                    </div>
                    <div>
                      <img src={items.image} />
                    </div>
                  </div>
                ))}
                <div>
                  {data.map((item) => (
                    <div className="flex gap-10">
                      {item.cards.map((cards) => (
                        <div className="border flex max-w-[190px] h-[158px] rounded-[8px] border-[#E9E9E9] bg-[#E6E6E6] shadow-[#E6E6E6]">
                          <div className="pt-[13px] mx-[45px] flex flex-col justify-center items-center content-fit">
                            {cards.icon}
                            <p className="text-[#424242] font-poppins text-[14px] pt-[7.7px] pb-[19.3px] font-medium leading-[18px] text-center">
                              {cards.tages}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
      <div className="">
        <OurWorks />
      </div>
      <p className="text-[#424242] font-poppins text-[32px] font-semibold flex justify-center items-center pt-[60px]">
        Testimonials
      </p>
      <div className="pt-[27px] flex justify-center items-center">
        <div className="border w-[900px] h-[308px] rounded-[12px] shadow-[#848484] bg-[#F6F6F6] pt-[27px] flex justify-center items-center align-middle ">
          <div className="flex flex-col">
            <div className="relative flex justify-center items-center align-middle">
              <p className="text-[#848484] font-montagu text-[80px] font-semibold w-[59px] h-[61px] mb-10">
                “
              </p>
              <p className="text-[#454545] text-center font-poppins text-[16px] font-medium leading-[30px]">
                I’m very satisfied by the output that was given, my business is
                running better than before.
              </p>
              <p className="text-[#848484] font-montagu text-[80px] font-semibold w-[59px] h-[61px] flex-shrink-0 mb-10 pl-4">
                ”
              </p>
            </div>
            <div className="flex justify-end items-end pr-9">
              <p className="text-right text-[#454545] font-poppins text-[16px] font-medium">
                -Anil Kumar Ponnapu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[158px]">
        <FooterAda />
      </div>
    </div>
  );
};
export default Adaservice;
