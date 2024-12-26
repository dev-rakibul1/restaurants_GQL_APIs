import bcrypt from "bcrypt";
import { JwtHelper } from "../../../../helper/jwt";

interface IUser {
  name: string;
  email: string;
  password: string;
}

const addUser = async (parent: any, args: IUser, { prisma }: any) => {
  // Check if the user already exists by email
  const isExistUser = await prisma.user.findFirst({
    where: { email: args.email },
  });

  if (isExistUser) {
    return {
      customError: "Email already exists!",
      token: null,
    };
  }

  // Hash the password
  const hashPass = await bcrypt.hash(args.password, 12);

  // Prepare data for user creation (excluding the password from the response)
  const { password, ...data } = args;
  const payloads = {
    ...data,
    password: hashPass,
  };

  // Create a new user in the database
  const user = await prisma.user.create({ data: payloads });

  // Prepare JWT payload
  const signPayload = {
    id: user.id,
    email: user.email,
  };

  // Sign the JWT token
  const token = JwtHelper.JwtSign(signPayload);

  // Return the response
  return {
    customError: null,
    token,
  };
};

export const UserAPIs = {
  addUser,
};
