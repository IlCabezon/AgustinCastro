import dotenv from 'dotenv';
dotenv.config();

type ConfigVariables = {
  PORT: string;
  MONGO_URI: string;
};

export default {
  PORT: process.env.BACKOFFICE_PORT || 4000,
  MONGO_URI: `${process.env.MONGO_URI}`
} as ConfigVariables;
