"use client";
import React, { useState } from "react";

const InputComponent = ({ className, type, onChange, value,name,placeholder}: any) => {
  // const [targetValue,settargetValue]=useState("")

  return (
    <div>
      <input
      name={name}
      className={`w-[400px] p-2 border border-gray-400 rounded-[4px] focus:outline-none focus:ring-2 focus:border-blue-300 focus:ring-blue-300 ${className}`}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
