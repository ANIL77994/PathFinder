"use server";

import DBconnection from "../utils/config/db";
import UserModel from "../utils/models/User";

const RegisterAction = async (registerDetails:any) => {
  await DBconnection();
  console.log("registat",registerDetails)

  try {
    await UserModel.create({
      username:registerDetails.username,
      email:registerDetails.email,
      password:registerDetails.password
    })

    return { success: true, message: "Registration successful" };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, message: "Registration failed", };
  }
};

export default RegisterAction;
