import { calculateAchievements, getActualAchievements } from './actualAchivements';
import {
  ACTUAL_ACHIEVEMENTS,
  CHALLENGE_ID
} from './actualAchivements.mock';

/*
 // prop: challangeId
 //
 // return: ActualAchievement[] { id: number;
 //   description: string;
 //   image: string;
 //   status: IStatus; 
 // }
 // 
 //
 */


test('returns actual achievement', () => {
  const task = getActualAchievements(CHALLENGE_ID);
  expect(task).toStrictEqual(ACTUAL_ACHIEVEMENTS);
});

test('calculate actual achievement', () => {
  const task = calculateAchievements(CHALLENGE_ID);
  expect(task).toStrictEqual(ACTUAL_ACHIEVEMENTS);
});