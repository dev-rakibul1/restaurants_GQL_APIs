import { Burger, User } from "@prisma/client";
import DataLoader from "dataloader";
import { prisma } from "..";

// Batch function for users
const batchUser = async (ids: string[]): Promise<User[]> => {
  const users = await prisma.user.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  // Map users by their id for easy lookup
  const userData: { [key: string]: User } = {};
  users.forEach((user) => {
    userData[user.id] = user;
  });

  // Return users in the order of the requested ids
  return ids.map((id) => userData[id]);
};

// User DataLoader
// @ts-ignore
export const userLoader = new DataLoader<string, User>(batchUser);

// Batch function for burgers
const batchBurger = async (ids: string[]): Promise<Burger[]> => {
  const burgers = await prisma.burger.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  // Map burgers by their id for easy lookup
  const burgerData: { [key: string]: Burger } = {};
  burgers.forEach((burger) => {
    burgerData[burger.id] = burger;
  });

  // Return burgers in the order of the requested ids
  return ids.map((id) => burgerData[id]);
};

// Burger DataLoader
// @ts-ignore
export const burgerLoader = new DataLoader<string, Burger>(batchBurger);
