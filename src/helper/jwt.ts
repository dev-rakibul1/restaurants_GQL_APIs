import jwt from "jsonwebtoken";
import { jwtExpire, keySecret } from "../constant/constant";
import { IJwtPayload } from "../types/common";

const JwtSign = (payload: IJwtPayload) => {
  const token = jwt.sign(payload, keySecret, { expiresIn: jwtExpire });
  return token;
};

export const jwtVerify = async (token: string) => {
  try {
    const decodeToken = (await jwt.verify(token, keySecret as string)) as {
      id: string;
    };
    return decodeToken;
  } catch (error) {
    return null;
  }
};

export const JwtHelper = {
  JwtSign,
  jwtVerify,
};
