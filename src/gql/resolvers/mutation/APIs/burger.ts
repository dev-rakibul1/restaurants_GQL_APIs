const addBurger = async (
  parent: any,
  args: any,
  { prisma, decodeToken }: any
) => {
  // Check if the user is authenticated
  if (!decodeToken?.id) {
    return {
      customError: "Unauthorized access!",
      post: null,
    };
  }

  const payloads = {
    ...args,
    userId: decodeToken.id,
  };

  const burger = await prisma.burger.create({ data: payloads });
  return burger;
};

export const BurgerAPIs = {
  addBurger,
};
