import { Router } from 'express';
import { getTasks } from './task.controller';

const router = Router();

router.get('/tasks', getTasks);

export { router as taskRouter };