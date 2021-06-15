import { getTaskForTodayType } from '../../interfaces/taskForToday';
// @ts-ignore
import jsonTasksData from '../../../dataStorage/tasks.json';

import { ITask } from '../../interfaces/task';
import { getChallengeById } from '../challenge/challenge';

export const getDayNumber = (startDay: string): number => {
  const start = Date.parse(startDay);
  const now = Date.now();
  const diffTime = Math.abs(now - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export const getTaskForToday: getTaskForTodayType = (challengeId) => {
  const {
    startDate,
    tasksOrder
  } = getChallengeById(challengeId);

  const day = getDayNumber(startDate);
  const taskId = tasksOrder[day - 1];
  const currentTask = jsonTasksData.find((task: ITask) => task.id === taskId);
  currentTask.status = 0;

  return currentTask;
}