import { Request, Response } from 'express';
import { getTaskForToday } from './task';

export const getTaskForTodayByChallengeId = async (request: Request, response: Response) => {

  const { challengeId } = request.params;

  const task = await getTaskForToday(Number(challengeId));

  try {
    response.json(task);
  } catch (e: any) {
    console.log(e);
    response.json(e.detail);
  }
};
