import { IStatus } from './status';

export interface IAchievement {
  id: number;
  description: string;
  icon: string;
  checkComplete(s: IStatus): IStatus;
}

export type getTaskArchiveType = {
  (id: number): IAchievement[],
};
