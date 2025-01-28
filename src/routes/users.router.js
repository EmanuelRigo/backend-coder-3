import { Router } from "express";

import generateUsers from "../utils/utils.js";

const router = Router();
router.get('/', (req, res) => { 
    const users = []
    for (let i = 0; i < 100; i++) {
        users.push(generateUsers())
    }
    res.json(users)
 });

export default router