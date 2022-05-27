import { Request, Response } from "express";

type GetResponse = {
  message: string;
};

export const GetTechs = (_: Request, res: Response<GetResponse>) => {
  res.status(200).json({ message: "Technologies Stack" });
};

type PostResponse = {
  body: string;
};

export function PostTechs(req: Request, res: Response<PostResponse>) {
  const { body } = req.body;
  res.status(200).json({ body });
}
