export enum StatusState {
  Progress = 0,
  Success,
  Failure
}

export interface IChallenge {
  id: number;
  state: StatusState;
  startDate: string;
  tasksOrder: Set<string>;
  tasksStatus: string;
  achievementsStatus: Map<number, string>;
}

export type startNewChallengeType = (id: number) => IChallenge;
