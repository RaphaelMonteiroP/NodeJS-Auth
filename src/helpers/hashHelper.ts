import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, 11);
  return hashedPassword;
}
