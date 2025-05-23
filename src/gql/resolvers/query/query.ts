export const Query = {
  // Drink query
  drinks: async (parent: any, args: any, { prisma }: any) => {
    const result = await prisma.drink.findMany();
    return result;
  },

  sDrink: async (parent: any, args: any, { prisma }: any) => {
    const result = await prisma.drink.findFirst();
    return result;
  },

  // Burger query
  burgers: async (parent: any, args: any, { prisma }: any) => {
    const result = await prisma.burger.findMany();
    return result;
  },

  sBurger: async (parent: any, args: any, { prisma }: any) => {
    const result = await prisma.burger.findFirst();
    return result;
  },

  // Pizza query
  pizzas: async (parent: any, args: any, { prisma }: any) => {
    const result = await prisma.pizza.findMany();
    return result;
  },

  // Pizza query
  products: async (parent: any, args: any, { prisma }: any) => {
    const result = await prisma.products.findMany();
    return result;
  },

  sPizza: async (parent: any, args: any, { prisma }: any) => {
    const result = await prisma.pizza.findFirst();
    return result;
  },

  // User query
  users: async (parent: any, args: any, { prisma }: any) => {
    const result = await prisma.user.findMany({
      include: {
        drinks: true,
        burgers: true,
        pizzas: true,
      },
    });

    return result;
  },

  sUser: async (parent: any, args: any, { prisma }: any) => {
    const result = await prisma.user.findFirst({
      include: {
        drinks: true,
        burgers: true,
        pizzas: true,
      },
    });
    return result;
  },
};
