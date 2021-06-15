import { IStatus } from './status';

export interface ITaskForToday {
  id: number;
  description: string;
  status: IStatus;
}

export type getTaskForTodayType = (id: number) => ITaskForToday;
