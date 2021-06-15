// @ts-ignore
import jsonActualAchievementData from '../../../dataStorage/achievements.json';
import { getTaskArchiveType } from '../../interfaces/achievement';
import { getChallengeById } from '../challenge/challenge';

export const getTaskArchive: getTaskArchiveType = (challengeId) => {
  const currentChallenge = getChallengeById(challengeId);
  
  return currentChallenge.tasksStatus;
}
