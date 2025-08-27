import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  auth_secret: process.env.AUTH_SECRET,
};
