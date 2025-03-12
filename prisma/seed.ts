import { Prisma, PrismaClient } from "@prisma/client";

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
    await prisma.user.create({ data: user });
  }
}

main().then(() => console.log("Done!"));
