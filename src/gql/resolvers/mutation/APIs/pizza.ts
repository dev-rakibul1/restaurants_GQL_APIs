const addPizza = async (
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

  const pizza = await prisma.pizza.create({ data: payloads });
  return pizza;
};

export const PizzaAPIs = {
  addPizza,
};
