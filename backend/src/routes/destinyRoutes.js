import express from "express";

import { createDestiny, destinies, deleteDestiny, updatedDestiny, findDestiny } from '../controllers/destiny.js';

const router = express.Router();

router.get('/destinies', destinies);
router.get('/destiny/:id', findDestiny);
router.post('/create', createDestiny);
router.delete('/delete/:id', deleteDestiny);
router.put('/update/:id', updatedDestiny);

export default router;