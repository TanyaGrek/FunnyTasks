// export enum StatusState {
//   Progress = 0,
//   Success,
//   Failure
// }

export interface IChallenge {
  id: number;
  state: string;
  startDate: string;
  tasksOrder: string;
  tasksStatus: string;
  achievementsStatus: string;
}

export type startNewChallengeType = {
  (id: number): IChallenge,
};
