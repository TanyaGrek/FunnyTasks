import { Router } from 'express';
import { getAchieveItem } from './achieveItem.controller';

const router = Router();

router.get('/achieveItems/:id', getAchieveItem);

export { router as actualAchieveItemsRouter };