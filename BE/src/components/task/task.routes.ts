import { Router } from 'express';
import { getTaskForTodayByChallengeId } from './task.controller';

const router = Router();

router.get('/tasks/:challengeId/taskForToday', getTaskForTodayByChallengeId);

export { router as taskRouter };