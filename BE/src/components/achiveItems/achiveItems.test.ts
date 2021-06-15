import { getChallengeById } from '../challenge/challenge';
import { CHALLENGE, CHALLENGE_ID } from '../challenge/challenge.mock';
import { getTaskArchive } from './achiveItems';
import { ACHIEVE_ITEM } from './achiveItems.mock';


/*
 // prop: challangeId
 //
 // return: IArchiveItem {
 //   id: number;
 //   description: string;
 //   status: IStatus;
 // }
 // 
 //
 */

test('returns current challenge', () => {
  const challenge = getChallengeById(CHALLENGE_ID);
  expect(challenge).toStrictEqual(CHALLENGE);
});

test('returns achieve tasks', () => {
  const task = getTaskArchive(CHALLENGE_ID);
  expect(task).toStrictEqual(ACHIEVE_ITEM);
});