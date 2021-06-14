import { ITask } from './task';

export enum StatusState {
  InProgress = 0,
  Success,
  Failure
}

export interface IChallenge {
  id: number;
  state: StatusState;
  startDate: string;
  tasksOrder: Set<string>;
  tasksStatus: Map<number, string>;
  achievementsStatus: Map<number, string>;
}

export type startNewChallengeType = (
  taskList: ITask[],
  challengeList: IChallenge[],
  challengeDuration: number,
  achievementAmount: number
) => IChallenge;
