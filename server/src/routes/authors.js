import { Router } from 'express';
import Table from '../table';

let router = Router();

let authors = new Table('users');

router.post('/', async (req, res) => {
    let createAuthor = await authors.insert(req.body)

    return res.sendStatus(200)
});

export default router;