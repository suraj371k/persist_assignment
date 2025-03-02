import express from 'express'
import { createChallenge, getAllChallenges, getById, updateVisibility } from '../controllers/challengeController.js'
const router = express.Router()

router.post('/' , createChallenge)
router.get('/' , getAllChallenges)
router.get('/:id' , getById)
router.patch('/visibility/:id' , updateVisibility)

export default router;