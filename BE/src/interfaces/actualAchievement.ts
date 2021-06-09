import { IAchievement } from './achievement';
import { IStatus } from './status';

export interface IActualAchievement {
  id: number;
  description: string;
  image: string;
  status: IStatus;
}

export type getActualAchievementsType = {
  (id: number): IActualAchievement[],
};

export type calculateAchievementsStatus = {
  (id: number): IAchievement[],
};
