import dotenv from 'dotenv';
//dotenv config
dotenv.config();

type ConfigVariables = {
  PORT: string;
};

export default {
  PORT: process.env.PORT || 3000
} as ConfigVariables;
