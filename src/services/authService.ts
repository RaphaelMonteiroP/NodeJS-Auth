import AuthRepository from "../repositories/authRepository.js";
import { hashPassword, compareHashedPassword } from "../helpers/hashHelper.js";
import { validateStrength } from "../helpers/validationHelper.js";

const authRepository = new AuthRepository();

export default class AuthService {
  async userRegister(name: string, email: string, password: string) {
    const validatePassword = validateStrength(password);
    if (validatePassword === "weak") {
      throw new Error("Password is too weak");
    }
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

  async userLogin(email: string, password: string) {
    const userSearch = await authRepository.userFind(email);
    if (!userSearch) {
      throw new Error("Incorrect email or password");
    }
    const compare = await compareHashedPassword(password, userSearch.password);
    if (!compare) {
      throw new Error("Incorrect email or password");
    }
    return userSearch;
  }
}
