import bcrypt from "bcrypt";
import { JwtHelper } from "../../../../helper/jwt";

interface IUser {
  email: string;
  password: string;
}

const login = async (parent: any, args: IUser, { prisma }: any) => {
  // Check if the user exists
  const isExistUser = await prisma.user.findFirst({
    where: { email: args.email },
  });

  // If user doesn't exist, return an error
  if (!isExistUser) {
    return {
      customError: "Invalid email or password!",
      token: null,
    };
  }

  // Compare the hashed password with the input password
  const isPasswordValid = await bcrypt.compare(
    args.password,
    isExistUser.password
  );

  // If password is incorrect, return an error
  if (!isPasswordValid) {
    return {
      customError: "Invalid email or password!",
      token: null,
    };
  }

  // Prepare JWT payload with user details
  const signPayload = {
    id: isExistUser.id,
    email: isExistUser.email,
  };

  // Sign the JWT token
  const token = JwtHelper.JwtSign(signPayload);

  // Return the response with token
  return {
    customError: null,
    token,
  };
};

export const LoginAPIs = {
  login,
};
