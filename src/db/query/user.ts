import { Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";

export const createUser = async (data: Prisma.UserCreateInput) => {
  return prisma.user.create({ data });
};

export const findUser = async (where: Prisma.UserWhereUniqueInput) => {
  return prisma.user.findUnique({ where });
};

export const updateUser = async (
  where: Prisma.UserWhereUniqueInput,
  data: Prisma.UserUpdateInput,
) => {
  return prisma.user.update({ where, data });
};

export const deleteUser = async (where: Prisma.UserWhereUniqueInput) => {
  return prisma.user.delete({ where });
};
