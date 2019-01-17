// import { Router } from 'express';
// import chirpsStore from '../chirpsstore';

// let router = Router();

// router.get('/:id?', (req, res) => {
//     let id = req.params.id
//     if (id) {
//         res.json(chirpsStore.GetChirp(id))
//     } else {
//         let chirps = chirpsStore.GetChirps();
//         let response = Object.keys(chirps).map(key => { //[0, 1, 2, nextid] map => chirps[key]
//             let id = key;
//             let Chirp = chirps[key].Chirp;
//             let Name = chirps[key].Name;
//             return {
//                 id,
//                 Name,
//                 Chirp
//             }
//         });
//         response.pop();
//         res.send(response);
//     }
// });

// router.post('/', (req, res) => {
//     chirpsStore.CreateChirp(req.body);
//     let chirps = chirpsStore.GetChirps();
//         let response = Object.keys(chirps).map(key => { //[0, 1, 2, nextid] map => chirps[key]
//             let id = key;
//             let Chirp = chirps[key].Chirp;
//             let Name = chirps[key].Name;
//             return {
//                 id,
//                 Name,
//                 Chirp
//             }
//         });
//         response.pop();
//         res.send(response);
// });

// router.put('/:id', (req, res) => {
//     let id = req.params.id;
//     let editChirp = req.body
//     chirpsStore.UpdateChirp(id, editChirp);
//     res.send(`It has been updated!`);
// });

// router.delete('/:id', (req, res) => {
//     chirpsStore.DeleteChirp(req.params.id);
//     res.send(`It has been deleted!`);
// });

// export default router;