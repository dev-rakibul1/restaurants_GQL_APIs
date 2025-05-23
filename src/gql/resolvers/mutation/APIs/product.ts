type CommonProductInput = {
  image: string;
  price: number;
  des: string;
  category: string;
  status?: boolean;
};

const addCommonProduct = async (
  parent: any,
  args: CommonProductInput,
  { prisma }: any
) => {
  const product = await prisma.products.create({ data: args });
  return product;
};

export const ProductAPIs = {
  addCommonProduct,
};
