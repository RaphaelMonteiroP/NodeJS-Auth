import { type Request, type Response } from "express";
import AuthService from "../services/authService.js";

const authService = new AuthService();

export default class AuthController {
  async userRegister(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ message: "Must contain name, email and password" });
      }
      const userRegister = await authService.userRegister(
        name,
        email,
        password,
      );
      return res
        .status(201)
        .json({ message: "User Registered", user: userRegister.name });
    } catch (error: any) {
      return res
        .status(400)
        .json({ message: "Error registering user", error: error.message });
    }
  }
}
