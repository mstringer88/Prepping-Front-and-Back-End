import { Router } from 'express';
import peopleRouter from './people';
import chirpsRouter from './chirps';
import usersRouter from './user';
import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';
import authorRouter from './authors';

let router = Router();


router.use('/auth', authRouter);
router.use('/authors', authorRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/users', usersRouter);    
router.use('/people', peopleRouter);
router.use('/chirps', chirpsRouter)

export default router;