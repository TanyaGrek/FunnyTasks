import { getDayNumber, getTaskForToday } from "./task";
import { CHALLENGE_ID, START_DAY, TODAY, TODAYS_TASK } from "./task.mock";

/*
// prop: challangeId
//
// return:  { id: number;
//   description: string;
//   status: IStatus;
// }

// task_id = new Date().toISOString() - startDate
//
 */

test('returns todays day numder', () => {
  Date.now = jest.fn(() => new Date(TODAY).valueOf())
  const number = getDayNumber(START_DAY);
  expect(number).toBe(2);
});

test('returns task for today', () => {
  const task = getTaskForToday(CHALLENGE_ID);
  expect(task).toStrictEqual(TODAYS_TASK);
});