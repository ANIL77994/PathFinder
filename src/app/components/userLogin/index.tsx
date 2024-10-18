"use client";
import React, { useState } from "react";
import Button from "../button";
import InputComponent from "../inputsCom";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaceBookIcon, GitIcon, GoogleIcon, TwiterIcon } from "../icons";
import { LoginAction } from "@/app/serverActions/loginAction";

const UserLogIn = () => {
  const [targetValue, setTargetValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const router = useRouter();

  const signUpRouter = () => {
    router.push("/registers");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTargetValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const response = await LoginAction({ email: targetValue.email, password: targetValue.password });
  
    if (response?.success) {
      setError(true)
    } else {
   
       router.push('/');
    }
  };
  
  return (
    <div className="flex justify-between flex-wrap h-screen">
      <img src={"images/loginimage.png"} className="w-[600px]" alt="Login Visual" />
      <div className="flex justify-end">
        <div className="border h-auto w-[500px] flex justify-center items-center shadow-md rounded-md">
          <form onSubmit={handleSubmit}>
            <p className="flex justify-center mb-10 text-[25px] text-blue-400 font-bold">
              Welcome To Login
            </p>
            <div className="flex-row">
              <InputComponent
                name="email"
                type="text"
                value={targetValue.email}
                onChange={handleChange}
                className={"mb-5"}
                placeholder="Enter Email.."
              />
              <InputComponent
                name="password"
                type="password" // Fixed to password input
                value={targetValue.password}
                onChange={handleChange}
                className={"mb-5"}
                placeholder="Enter Password.."
              />
            </div>
            <p className="flex justify-end text-blue-500 cursor-pointer">Forgot Password</p>

            <div className="w-full">
              <Button
                className={"mt-4 w-full flex text-center justify-center"}
                type="submit"
                title="Login"
              />
            </div>
            <p className="flex justify-center mt-4">
              Don't have an account?{" "}
              <span className="text-blue-600 cursor-pointer pl-1" onClick={signUpRouter}>
                SignUp
              </span>
            </p>

            {error && <p className="text-red-500 mt-4 text-center">Please Log In Properly</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogIn;
