import { getChallengeById, getTaskOrder, startNewChallenge } from './challenge';
import {
  ACHIEVEMENT_AMOUNT,
  CHALLENGE,
  CHALLENGE_DURATION,
  CHALLENGE_ID,
  CHALLENGE_LIST, FIXED_SYSTEM_TIME, NEW_CHALLENGE,
  TASK_LIST
} from './challenge.mock';

/*
 // prop:
 // export type startNewChallengeType = (
 //   taskList: ITask[],
 //   challengeList: IChallenge[],
 //   challengeDuration: number,
 //   achievementAmount: number
 // ) => IChallenge;

 // IChallenge {
 //   id: number;
 //   state: StatusState;
 //   startDate: string;
 //   tasksOrder: Set<string>;
 //   tasksStatus: Map<number, string>;
 //   achievementsStatus: Map<number, string>;
 // }
 //
 */

beforeEach(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(Date.parse(FIXED_SYSTEM_TIME));
});

afterEach(() => {
  jest.useRealTimers();
});

const tasksOrder = [25, 21, 29, 18, 8, 16, 1, 27, 15, 13, 2, 28, 10, 5, 20, 9, 24, 30, 4, 23, 14, 17, 11, 22, 19, 26, 6, 3, 7, 12]

test('returns current challenge', () => {
  const challenge = getChallengeById(CHALLENGE_ID);
  expect(challenge).toStrictEqual(CHALLENGE);
});

test('returns array of random numbers', () => {
  const tasksOrder = getTaskOrder(3);
  expect(tasksOrder.size).toBe(3);
});

test('returns new challenge ', () => {
  // new Date().toISOString = jest.fn(() => new Date(TODAY).valueOf())
  const newChallenge = startNewChallenge(TASK_LIST, CHALLENGE_LIST, CHALLENGE_DURATION, ACHIEVEMENT_AMOUNT);

  expect({...newChallenge, tasksOrder}).toStrictEqual(NEW_CHALLENGE);
});


