import dotenv from 'dotenv';
//dotenv config
dotenv.config();

type ConfigVariables = {
  PORT: string;
  MONGO_URI: string;
};

export default {
  PORT: process.env.PORTFOLIO_PORT || 3000,
  MONGO_URI: `${process.env.MONGO_URI}`
} as ConfigVariables;
