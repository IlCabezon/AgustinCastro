import { Router } from 'express';
//types
import { Request, Response } from 'express';
//controllers
import * as TechCtrl from '../../controllers/techStackControllers';

const router = Router();

interface TechHTTP {
  GET(req: Request, res: Response): void;
  POST(req: Request, res: Response): void;
}

const HTTP: TechHTTP = {
  GET: (_, res) => {
    TechCtrl.GetTechs(_, res);
  },
  POST: (req, res) => {
    TechCtrl.PostTechs(req, res);
  }
};

router.use('/', (req: Request, res: Response) => {
  const method = req.method;

  if (method && (method === 'GET' || method === 'POST')) {
    return HTTP[method](req, res);
  }

  res.status(200).json('Technologies Stack');
});

export default router;
