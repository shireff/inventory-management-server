import { Request, Response } from "express";
import { Users } from "../models/Users";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("Error From Get Users controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};