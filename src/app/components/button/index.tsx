import { title } from "process";
import React from "react";

const Button = ({ title, className, type, onClick }: any) => {
  return (
    <div>
      <button
        className={`w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md ${className}`}
        type={type}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
