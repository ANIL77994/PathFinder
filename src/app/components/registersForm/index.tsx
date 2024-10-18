"use client";
import React, { useState } from "react";
import InputComponent from "../inputsCom";
import Button from "../button";
import RegisterAction from "@/app/serverActions/registerAction";
import { FaceBookIcon, GitIcon, GoogleIcon, LeftArrow, TwiterIcon } from "../icons";
import { useRouter } from "next/navigation";

const RegistersForm = () => {
  const [targetValue, setTargetValue] = useState({
    username: "",
    email: "",
    password: "",
  });
const router =useRouter()
  const [success, setSuccess] = useState<boolean | null>(null); // State to handle success or failure

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTargetValue({
      ...targetValue,
      [name]: value,
    });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userRegistrationForm = {
      username: targetValue.username,
      email: targetValue.email,
      password: targetValue.password,
    };

    try {
      await RegisterAction(userRegistrationForm);
      setSuccess(true);
      router.push("/loginpage")
    } catch (error) {
      setSuccess(false);
      console.error("Registration error:", error);
    }
  };
  const backtoLoginPage =()=>{
    router.push("/loginpage")
  }

  return (
    <div className="flex justify-end min-h-screen flex-wrap h-full">
      <div className="border  w-[500px] flex flex-col justify-center items-center shadow-md rounded-md h-screen">
        <form onSubmit={submitForm}>
          <p className="flex justify-center mb-10 text-[25px] text-blue-400 font-bold">
            Registration Form
          </p>

          <div className="flex flex-col">
            <InputComponent
              name="username"
              type="text"
              value={targetValue.username}
              onChange={handleChange}
              className={"mb-5"}
              placeholder={"Enter User Name"}
            />
            <InputComponent
              name="email"
              type="email"
              value={targetValue.email}
              onChange={handleChange}
              className={"mb-5"}
              placeholder={"Enter Email"}
            />
            <InputComponent
              name="password"
              type="password"
              value={targetValue.password}
              onChange={handleChange}
              className={"mb-5"}
              placeholder={"Enter Password"}
            />
          </div>
          

          <Button
            className={"mt-4 w-full flex text-center justify-center"}
            type="submit"
            title="Submit"
          />
          <p className="flex justify-center mt-4">Already have an account? <span className='text-blue-600 cursor-pointer pl-1' onClick={backtoLoginPage}>SignIn</span></p>
          <div className="flex items-center justify-center mt-5">
            <div className="border-t border-gray-300 flex-grow mr-3"></div>
            <span className="text-gray-500">or</span>
            <div className="border-t border-gray-300 flex-grow ml-3"></div>
          </div>
          <div className="flex items-center justify-center mt-4 gap-3">
            <div className="hover:bg-gray-200 w-[40px] h-[40px] justify-center flex items-center rounded-full">
              <GoogleIcon />
            </div>

            <div className="hover:bg-gray-200 w-[40px] h-[40px] justify-center flex items-center rounded-full">
              <GitIcon />
            </div>
            <div className="hover:bg-gray-200 w-[40px] h-[40px] justify-center flex items-center rounded-full">
              <TwiterIcon />
            </div>
            <div className="hover:bg-gray-200 w-[40px] h-[40px] justify-center flex items-center rounded-full">
              <FaceBookIcon />
            </div>
          </div>
        </form>

        {/* Conditionally render success or error message */}
        {success === true && (
          <p className="mt-4 text-green-500">Success! User has been created.</p>
        )}
        {success === false && (
          <p className="mt-4 text-red-500">Error! Something went wrong.</p>
        )}
      </div>
    </div>
  );
};

export default RegistersForm;
