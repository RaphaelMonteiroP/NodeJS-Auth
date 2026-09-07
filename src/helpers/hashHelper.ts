import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, 11);
  return hashedPassword;
}

export async function compareHashedPassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  const comparePassword = await bcrypt.compare(password, hashedPassword);
  return comparePassword;
}
