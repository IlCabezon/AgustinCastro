import Router from 'express';

const router = Router();

router.use('/technologies', () => {
  console.log('hola');
});

export default router;
