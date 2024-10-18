import React from "react";

const OurWorks = () => {
  const OurWorkImages = [
    { image: "images/Rectangle448.png" },
    { image: "images/Rectangle449.png" },
    { image: "images/Rectangle450.png" },
    { image: "images/Rectangle451.png" },
    { image: "images/Rectangle452.png" },
    { image: "images/Rectangle453.png" },
  ];

  return (
    <>
      <div className="flex justify-center items-center pt-[60px]">
        <h1 className="text-[#0C0C0C] font-poppins text-[48px] font-semibold leading-normal ">
          Our Works
        </h1>
      </div>

      <div
        className="flex justify-center flex-wrap pt-[30px]"
        style={{ gap: "27px 20px" }}
      >
        {OurWorkImages.map((item, index) => (
          <div key={index} className="">
            <img className="w-[620px] h-[421px]" src={item.image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default OurWorks;
