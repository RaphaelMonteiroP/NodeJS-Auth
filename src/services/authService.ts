import AuthRepository from "../repositories/authRepository.js";
import { hashPassword } from "../helpers/hashHelper.js";

const authRepository = new AuthRepository();

export default class AuthService {
  async userRegister(name: string, email: string, password: string) {
    const existingUser = await authRepository.userFind(email);
    if (existingUser !== null) {
      throw new Error("User already exists");
    }
    const hashedPassword = await hashPassword(password);
    const userCreated = await authRepository.userRegister(
      name,
      email,
      hashedPassword,
    );
    return userCreated;
  }
}
