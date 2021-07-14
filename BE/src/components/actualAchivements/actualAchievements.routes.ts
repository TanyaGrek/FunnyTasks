import { Router } from 'express';
import { getActualAchievements } from './actualAchievements.controller';

const router = Router();

router.get('/actualAchievements/:id', getActualAchievements);

export { router as actualAchievementsRouter };