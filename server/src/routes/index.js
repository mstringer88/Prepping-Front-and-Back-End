import { Router } from 'express';
import peopleRouter from './people';
import chirpsRouter from './chirps';

let router = Router();

router.use('/people', peopleRouter);
router.use('/chirps', chirpsRouter)

export default router;