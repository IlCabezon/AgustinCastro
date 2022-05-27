import { Request, Response } from 'express';

type ResponseType = {
  message: string;
};

export const pingResponse = (_: Request, res: Response<ResponseType>) => {
  res.status(200).json({ message: 'Pong' });
};
