// @ts-ignore
import jsonActualAchievementData from '../../../dataStorage/achievements.json';
import {
  calculateAchievementsStatus,
  getActualAchievementsType
} from '../../interfaces/actualAchievement';
import { getChallengeById } from '../challenge/challenge';


export const getActualAchievements: getActualAchievementsType = (challengeId) => {
  const currentChallenge = getChallengeById(challengeId);
  
  return currentChallenge.achievementsStatus;
}

export const calculateAchievements: calculateAchievementsStatus = (challengeId) => {
  const currentChallenge = getChallengeById(challengeId);

  return currentChallenge.achievementsStatus;
}
