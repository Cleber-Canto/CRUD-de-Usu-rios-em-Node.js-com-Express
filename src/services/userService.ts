import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.error("Failed to find users", error);
    throw error;
  }
};

export const findUserById = async (id: number) => {
  try {
    return await prisma.user.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Failed to find user with id ${id}`, error);
    throw error;
  }
};

export const createUser = async (name: string, email: string) => {
  try {
    return await prisma.user.create({
      data: { name, email },
    });
  } catch (error) {
    console.error("Failed to create user", error);
    throw error;
  }
};

export const updateUser = async (id: number, name: string, email: string) => {
  try {
    return await prisma.user.update({
      where: { id },
      data: { name, email },
    });
  } catch (error) {
    console.error(`Failed to update user with id ${id}`, error);
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    await prisma.user.delete({
      where: { id },
    });
  } catch (error) {
    console.error(`Failed to delete user with id ${id}`, error);
    throw error;
  }
};
