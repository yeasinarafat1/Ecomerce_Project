"use server";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "@/DB/Models/User";
import { dbcon } from "@/DB/dbcon";
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const createUser = async ({
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
  password: string;
}) => {
  try {
    await dbcon();
    const user = await User.findOne({ email });
    if (user) {
      return JSON.parse(JSON.stringify({ error: "user already exist" }));
    }
    const salt = await bcrypt.genSalt(10);
    const hasspassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hasspassword,
    });
    if (newUser) {
      await newUser.save();
      return JSON.parse(JSON.stringify({ newUser }));
    } else {
      return JSON.parse(JSON.stringify({ error: "Internal server error" }));
    }
  } catch (error) {
    console.log("an error occured", error);
  }
};
export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await signIn("credentials", {
      email,
      password,
    });
    console.log(res);

    if (res) return true;
    else return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getSesion = async () => {
  const session = await auth();
  return JSON.parse(JSON.stringify(session));
};

export const signOutAction = async () => {
  try {
    const res = await signOut();

    if (res) return true;
    else return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export async function revalidateHome() {
  revalidatePath("/");
}
