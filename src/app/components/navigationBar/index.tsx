import React from "react";

const NavigationBar = () => {
  const navBarData = [
    {
      name: "",
      icon: "",
      link: "",
    },
  ];
  return (
    <div className="h-[60px] bg-gray-100 shadow-lg mt-4 mx-4 flex items-center justify-center">
      <div className="flex justify-between w-full mx-7">
        <div className="text-center">
            <img src={"images/findpath.png"} className="h-[50px] w-[50px]"/>

        </div>
        <div className=" flex gap-4 text-center mt-3">
        <p>fgh</p>
            LogOut
            
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
