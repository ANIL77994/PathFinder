"use server";
import { signIn } from "next-auth/react";

export async function LoginAction(credentials: { email: string; password: string; }) {
  console.log("Received credentials:", credentials.email, credentials.password);

  try {
    const result = await signIn("credentials", {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
    });

    console.log("Sign-in result:", result);

    if (!result?.ok) {

      console.error("Error logging in:");
 
    }

    // If successful, return success
    return { success: true };
  } catch (err) {
    // Handle errors that occur during sign-in
    console.error("Error during login:", err);
    return { error: "Login failed" };
  }
}
