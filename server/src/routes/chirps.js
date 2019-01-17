import { Router } from 'express';
import Table from '../table';

let router = Router();

let chirps = new Table('chirps');

router.get('/', (req, res) => {
    chirps.getAll()
        .then(chirps => {
            res.json(chirps)
        });
});

router.get('/:id', async (req, res) => {
    let id = req.params.id
    let chirp = await chirps.getOne(id);
    // chirp = chirp;
    return res.json({
        title: chirp.title,
        text: chirp.text,
        location: chirp.location
    });
    res.sendStatus(200);
});

router.post('/', async (req, res) => {
    let createChirp = await chirps.insert(req.body)

    return res.sendStatus(200)
});

router.put('/:id', async (req, res) => {
    await chirps.update(req.params.id, req.body);
    res.sendStatus(200)
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id
    let chirp = await chirps.delete(id);
    res.sendStatus(200);
});

export default router;