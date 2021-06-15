import { ITask } from './task';

export enum ChallengeStatusState {
  InProgress = 0,
  Success,
  Failure
}

export interface IChallenge {
  id: number;
  state: ChallengeStatusState;
  startDate: string;
  tasksOrder: Set<number>;
  tasksStatus: Map<number, string>;
  achievementsStatus: Map<number, string>;
}

export type startNewChallengeType = (
  taskList: ITask[],
  challengeList: IChallenge[],
  challengeDuration: number,
  achievementAmount: number
) => IChallenge;
