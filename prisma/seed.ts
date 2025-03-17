import { Prisma, PrismaClient } from "@prisma/client";
import { hashPassword } from "@/utils/bcrypt.utils";

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    name: "علیرضا درانی کریانی",
    username: "alireza97d",
    email: "alireza97d@gmail.com",
    password: "admin",
  },
];

export async function main() {
  for (const user of users) {
    const hashedPassword = await hashPassword(user.password);
    await prisma.user.create({ data: { ...user, password: hashedPassword } });
  }
}

main().then(() => console.log("Done!"));
