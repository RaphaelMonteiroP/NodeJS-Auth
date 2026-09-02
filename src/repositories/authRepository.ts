import prisma from "../infra/prisma.js";

export default class UserRepository {
  async userRegister(name: string, email: string, password: string) {
    const createUser = await prisma.user.create({
      data: { name, email, password },
    });
    return createUser;
  }

  async userFind(email: string) {
    const userFind = await prisma.user.findUnique({ where: { email } });
    return userFind;
  }
}
