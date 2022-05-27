import { Router } from 'express';
//routes
import techStack from './techStack/index.routes';

const router = Router();

router.use('/technologies', techStack);

export default router;
