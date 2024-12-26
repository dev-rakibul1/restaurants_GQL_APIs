const addDrink = async (
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

  const drink = await prisma.drink.create({ data: payloads });
  return drink;
};

export const DrinkAPIs = {
  addDrink,
};
