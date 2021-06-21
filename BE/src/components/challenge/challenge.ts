// @ts-ignore
import jsonChallengesData from '../../../dataStorage/challenges.json';
import { StatusState } from '../../interfaces/status';
import {
  IChallenge,
  startNewChallengeType,
  ChallengeStatusState
} from '../../interfaces/challenge';
import { calculateAchievements } from '../actualAchivements/actualAchivements';
import { io } from '../../index';

const AVAILABLE_TACK_AMOUNT = 30;

export const getChallengeById = (challengeId: number) => {
  return jsonChallengesData.find((challenge: IChallenge) => challenge.id === challengeId);
};

export const getTaskOrder = (max: number): Set<number> => {
  const randomArray: Set<number> = new Set();
  let index = 0;

  while (index < max) {
    const newNumber = Math.floor(Math.random() * AVAILABLE_TACK_AMOUNT);
    if (!randomArray.has(newNumber)) {
      randomArray.add(newNumber);
      index++;
    }
  }

  return randomArray;
};

// @ts-ignore
export const startNewChallenge: startNewChallengeType = (taskList, challengeList, challengeDuration = 30, achievementAmount: 5) => {
  const tasksOrder = getTaskOrder(challengeDuration);

  return ({
    id: challengeList.length + 1,
    state: ChallengeStatusState.InProgress,
    startDate: new Date().toISOString(),
    tasksOrder,
    tasksStatus: new Map().set(StatusState.Pending, 'Pending'),
    achievementsStatus: new Map().set(StatusState.Pending, 'Pending')
  });
};

export const updateTaskStatus = (data: any) => {
  // const challenge = getChallengeById(data.challengeId);

  console.log(data);
  io.on('connection', async (socket) => {
    socket.emit('message', await calculateAchievements(data.challengeId));
  });
};

export const manageTaskStatus = ({ taskId, challengeId }: any) => {
  const { tasksStatus } = getChallengeById(challengeId);
  console.log(tasksStatus);

  if (tasksStatus.has(taskId) && tasksStatus.get(taskId) !== 1) {
    updateTaskStatus({
      challengeId,
      taskId,
      status: 2,
      updated: new Date()
    });
  }

};
