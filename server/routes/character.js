import express from "express";
import { getUserCharacters, updateCharacter } from "../controllers/characters.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:userId/characters", verifyToken, getUserCharacters);

/* UPDATE */
router.patch("/:id/character", verifyToken, updateCharacter);

export default router;